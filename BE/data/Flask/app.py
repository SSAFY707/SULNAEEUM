from flask import Flask, request, jsonify
import pymysql
import numpy as np

app = Flask(__name__)


# 술 데이터
data_list = {}


# ============================= SQL문 ============================


# 술 검색
DRINK_INFO = "select drink_name, drink_amount, drink_level, drink_image from drink where drink_id = %s"

# 술 재료 ID 검색
DRINK_INGREDIENT_ID = "select ingredient_type_id from ingredient where drink_id = %s" 

# 술 재료 검색
DRINK_INGREDIENT = "select ingredient_name from ingredient_type where ingredient_type_id = %s" 

# 술 맛 select 구문
DRINK_TASTE = "select score from taste where drink_id = %s"

# 술 도수 select 구문
DRINK_LEVEL = "select drink_level from drink where drink_id = %s"

# 술 안주 select 구문
DRINK_DISH = "select dish_id from dish_drink where drink_id = %s"

# 안주 대분류 select 구문
DRINK_DISH_CATEGORY = "select dish_category from dish where dish_id = %s"

# 술 가격 select 구문
DRINK_PRICE = "select drink_price from drink where drink_id = %s"

# jubti_result 구하기
JUBTI_RESULT = "select male, female from jubti_result"

# jubti_result 남,여 사용자 수 구하기
JUBTI_COUNT_SEX = "select count(*) from jubti_result where sex = %s"

# jubti_result 사용자 평균 구하기
JUBTI_AVG = "select avg(taste_sweet), avg(taste_sour), avg(taste_refresh), avg(taste_flavor), avg(taste_throat), avg(taste_body) from jubti_result"

# jubti_result 남,여 사용자 평균 구하기
JUBTI_AVG_SEX = "select avg(taste_sweet), avg(taste_sour), avg(taste_refresh), avg(taste_flavor), avg(taste_throat), avg(taste_body) from jubti_result where sex = %s"

# jubti_result 나이별 사용자 평균 구하기
JUBTI_AVG_AGE = "select avg(taste_sweet), avg(taste_sour), avg(taste_refresh), avg(taste_flavor), avg(taste_throat), avg(taste_body) from jubti_result where age = %s"

# jubti_result 남,여 도수 확인
JUBTI_LEVEL_SEX = "select level from jubti_result where sex = %s"

# jubti_result 나이별 도수 확인
JUBTI_LEVEL_AGE = "select level from jubti_result where age = %s"

# 전체 랭킹 업데이트
RANKING_TOTAL_UPDATE = "update ranking set total = %s where ranking_id = %s"

# 남성 랭킹 업데이트
RANKING_MALE_UPDATE = "update ranking set male = %s where ranking_id = %s"

# 여성 랭킹 업데이트
RANKING_FEMALE_UPDATE = "update ranking set male = %s where ranking_id = %s"



# ============================= 술 데이터 초기 설정 ============================


# DB 연결
def db_connect():
    # DB 설정
    conn = pymysql.connect(host='j8a707.p.ssafy.io',
                        user='root',
                        password='A707sulnaeeumA707',
                        db='sulnaeeum',
                        charset='utf8')
    
    return conn


# 술 데이터 넣기
def make_drink_data():
    data = {'sweet' : [],
        'sour' : [],
        'sparkling' : [],
        'fragrance' : [],
        'throat' : [],
        'body' : [],
        'level' : [],
        'jeon' : [],
        'meat' : [],
        'seafood' : [],
        'soup' : [],
        'western food' : [],
        'dessert' : []}
    
    conn = db_connect()
    
    for i in range(630):
        if i == 0:
            continue

        cur = conn.cursor()

        # 술 맛 데이터
        cur.execute(DRINK_TASTE, str(i))
        result = cur.fetchall()
        r_list = []

        for r in result:
            r_list.append(r[0])

        data['sweet'].append(r_list[0])
        data['sour'].append(r_list[1])
        data['body'].append(r_list[2])
        data['sparkling'].append(r_list[3])
        data['fragrance'].append(r_list[4])
        data['throat'].append(r_list[5])
        
        
        # 술 도수 데이터
        cur.execute(DRINK_LEVEL, str(i))
        result = cur.fetchall()
        result = result[0][0]
        
        data['level'].append(result)


        # 술 안주 데이터
        cur.execute(DRINK_DISH, str(i))
        result = cur.fetchall()

        dic_dish = {'전/무침':0, '탕/전골':0, '육류':0, '해산물':0, '디저트':0, '양식':0}

        if len(result) > 0:
            result = str(result[0][0])

            # 안주 대분류 데이터
            cur.execute(DRINK_DISH_CATEGORY, result)
            result = cur.fetchall()
            result = result[0][0]
            
            dic_dish[result] = 3

        for d in dic_dish.keys():
            if d == '전/무침':
                data['jeon'].append(dic_dish[d])
            elif d == '탕/전골':
                data['soup'].append(dic_dish[d])
            elif d == '육류':
                data['meat'].append(dic_dish[d])
            elif d == '해산물':
                data['seafood'].append(dic_dish[d])
            elif d == '디저트':
                data['dessert'].append(dic_dish[d])
            elif d == '양식':
                data['western food'].append(dic_dish[d])
    

    for i in range(629):
        d_list = []
        d_list.append(data['sweet'][i])
        d_list.append(data['sour'][i])
        d_list.append(data['sparkling'][i])
        d_list.append(data['fragrance'][i])
        d_list.append(data['throat'][i])
        d_list.append(data['body'][i])
        d_list.append(data['level'][i])
        d_list.append(data['jeon'][i])
        d_list.append(data['meat'][i])
        d_list.append(data['seafood'][i])
        d_list.append(data['soup'][i])
        d_list.append(data['western food'][i])
        d_list.append(data['dessert'][i])

        data_list[i] = d_list

    conn.close()


make_drink_data()



# ============================= RabbitMQ API ============================


# 술 도수 계산
def cal_level(level):
    if level == 1:
        return 4
    elif level == 2:
        return 7
    elif level == 3:
        return 15
    elif level == 4:
        return 25
    else:
        return 45

# 랭킹 API
@app.route("/rabbit/ranking", methods=["POST"])
def rabbit_ranking():
    parameter_dict = request.get_json()
    print(parameter_dict)

    conn = db_connect()
    cur = conn.cursor()


    cur.execute(JUBTI_COUNT_SEX, "남성")
    jubti_male_size = cur.fetchall()[0][0]
    print("남자 수", jubti_male_size)

    cur.execute(JUBTI_COUNT_SEX, "여성")
    jubti_female_size = cur.fetchall()[0][0]
    print("여자 수", jubti_female_size)

    jubti_total_size = len(JUBTI_RESULT)

    jubti_male_point = []
    jubti_female_point = []
    jubti_total_point = []


    cur.execute(JUBTI_AVG)
    result_total = cur.fetchall()[0]

    for total in result_total:
        jubti_total_point.append(round(total))


    cur.execute(JUBTI_AVG_SEX, "남성")
    result_male = cur.fetchall()[0]

    for male in result_male:
        jubti_male_point.append(round(male))


    cur.execute(JUBTI_AVG_SEX, "여성")
    result_female = cur.fetchall()[0]

    for female in result_female:
        jubti_female_point.append(round(female))


    cur.execute(JUBTI_LEVEL_SEX, "남성")
    level_male = cur.fetchall()

    cur.execute(JUBTI_LEVEL_SEX, "여성")
    level_female = cur.fetchall()

    m_level_sum = 0
    for male in level_male:
        m_level_sum += cal_level(male[0])

    f_level_sum = 0
    for female in level_female:
        f_level_sum += cal_level(female[0])

    jubti_male_point.append(round(m_level_sum / jubti_male_size))
    jubti_female_point.append(round(f_level_sum / jubti_female_size))
    jubti_total_point.append(round((m_level_sum + f_level_sum) / jubti_total_size))

    for i in range(6):
        jubti_male_point.append(0)
        jubti_female_point.append(0)
        jubti_total_point.append(0)

    print(jubti_male_point)
    print(jubti_female_point)
    print(jubti_total_point)

    input_data = [[]]
    input_data.append(jubti_total_point)
    input_data.append(jubti_male_point)
    input_data.append(jubti_female_point)
    ranking(input_data)

    conn.close()

    return "ok"



# ============================= 추천 API ============================


# 컨텐츠 기반 추천 알고리즘
# 요청 : 단, 신, 청, 향, 목, 바, 도, 안
# 응답 : 아이디, 이름, 도수, 용량, 사진
@app.route("/recommend/contents", methods=["POST"])
def recommend_drink():
    parameter_dict = request.get_json()

    input_data = parameter_dict["input_data"]
    print(input_data)

    find_list = find_drink(input_data)

    conn = db_connect()
    cur = conn.cursor()

    find_drink_id_dic = {}

    for i in range(5):
        drink_id = find_list[i][0]+1

        this_drink_list = {}
        this_drink_list['drink_id'] = drink_id 

        cur.execute(DRINK_INFO, str(drink_id))
        result = cur.fetchall()
        this_drink_list['drink_name'] = result[0][0]
        this_drink_list['drink_amount'] = result[0][1]
        this_drink_list['drink_level'] = result[0][2]
        this_drink_list['drink_image'] = result[0][3] 

        # print(i+1, "위 : ", result, "(", drink_id, ") / 유사도 : ", find_list[i][1])
        # print(result, "술 정보 : ", data_list[drink_id-1])

        find_drink_id_dic[i] = this_drink_list
        print(find_drink_id_dic[i])

    conn.close()

    return find_drink_id_dic


# 컨텐츠 기반 선물 추천 알고리즘
# 요청 : 단, 신, 청, 향, 목, 바, 도, 안
# 응답 : 아이디, 이름, 도수, 용량, 사진
@app.route("/recommend/present", methods=["POST"])
def recommend_present_drink():
    parameter_dict = request.get_json()

    input_data = parameter_dict["input_data"]
    print(input_data)

    max_level = input_data[13]
    min_level = input_data[14]
    max_price = input_data[15]
    min_price = input_data[16]

    input_data = input_data[0:13]
    input_data.pop(6)
    find_list = find_present_drink(input_data)

    conn = db_connect()
    cur = conn.cursor()

    find_drink_id_dic = {}

    cnt = 0
    for i in range(len(find_list)):
        drink_id = find_list[i][0]+1

        this_drink_list = {}
        this_drink_list['drink_id'] = drink_id

        cur.execute(DRINK_PRICE, str(drink_id))
        result = cur.fetchall()
        drink_price = result[0][0]

        if drink_price == "":
            continue

        drink_price = drink_price.replace(",", "")

        if min_price > int(drink_price) or int(drink_price) > max_price:
            continue

        cur.execute(DRINK_LEVEL, str(drink_id))
        result = cur.fetchall()
        drink_level = result[0][0]

        if min_level > int(drink_price) or int(drink_level) > max_level:
            continue

        # print(i+1, "위 : ", result, "(", drink_id, ") / 유사도 : ", find_list[i][1])
        # print(result, "술 정보 : ", data_list[drink_id-1])

        find_drink_id_dic[cnt] = this_drink_list
        print(find_drink_id_dic[cnt])
        cnt += 1

        if cnt > 5:
            break

    conn.close()

    return find_drink_id_dic


# 유클리디안 거리 구하기
def euclidean_distance(data, drink):   
    return np.sqrt(np.sum((data - drink) ** 2))


# 유저 취향과 가장 유사한 5가지 술 찾기
def find_drink(input_data):
    # 거리 정보
    dis_dic = {}

    for i in range(629):
        X = np.array([input_data, data_list[i]])

        t_user = X[0][:]
        drink_data = X[1][:]
        dis = euclidean_distance(t_user, drink_data)

        dis_dic[i] = dis
    
    return sorted(dis_dic.items(), key = lambda item: item[1])


# 선물 대상과 가장 유사한 5가지 술 찾기
def find_present_drink(input_data):
    # 거리 정보
    dis_dic = {}

    for i in range(629):
        temp = data_list[i][6]
        data_list[i].pop(6)

        X = np.array([input_data, data_list[i]])

        data_list[i].insert(6, temp)

        t_user = X[0][:]
        drink_data = X[1][:]
        dis = euclidean_distance(t_user, drink_data)

        dis_dic[i] = dis
    
    return sorted(dis_dic.items(), key = lambda item: item[1])


# 컨텐츠 기반 비슷한 술 추천 알고리즘
# 요청 : 단, 신, 청, 향, 목, 바, 도, 안
# 응답 : 아이디, 이름, 도수, 용량, 사진
@app.route("/recommend/similar", methods=["POST"])
def recommend_similar_drink():
    parameter_dict = request.get_json()

    input_data = parameter_dict["input_data"]

    data_id = input_data[13]
    input_data = input_data[0:13]
    print(input_data)

    find_list = find_drink(input_data)

    conn = db_connect()
    cur = conn.cursor()

    find_drink_id_dic = {}

    for i in range(5):
        drink_id = find_list[i][0]+1

        if drink_id == data_id:
            continue

        this_drink_list = {}
        this_drink_list['drink_id'] = drink_id 

        cur.execute(DRINK_INFO, str(drink_id))
        result = cur.fetchall()
        this_drink_list['drink_name'] = result[0][0]
        this_drink_list['drink_amount'] = result[0][1]
        this_drink_list['drink_level'] = result[0][2]
        this_drink_list['drink_image'] = result[0][3] 

        # print(i+1, "위 : ", result, "(", drink_id, ") / 유사도 : ", find_list[i][1])
        # print(result, "술 정보 : ", data_list[drink_id-1])

        find_drink_id_dic[i] = this_drink_list
        print(find_drink_id_dic[i])

    if not 0 in find_drink_id_dic.keys():
        find_drink_id_dic[0] = find_drink_id_dic[1]

    conn.close()
    return find_drink_id_dic


# JuBTI 기반 랭킹 정렬 함수
# 요청 : 단, 신, 청, 향, 목, 바, 도, 안
# 응답 : 아이디, 이름, 도수, 용량, 사진
# @app.route("/ranking", methods=["POST"])
def ranking(input_data):
    data_size = len(input_data)

    find_drink_id_dic = {}

    conn = db_connect()
    cur = conn.cursor()

    for i in range(data_size):
        print(input_data[i])

        find_list = find_drink(input_data[i])
        find_drink_id_dic[i] = []

        for k in range(10):
            drink_id = find_list[k][0]+1

            this_drink_list = {}
            this_drink_list['drink_id'] = drink_id 

            # print(i+1, "위 : ", result, "(", drink_id, ") / 유사도 : ", find_list[i][1])
            # print(result, "술 정보 : ", data_list[drink_id-1])

            find_drink_id_dic[i].append(this_drink_list)

    print(find_drink_id_dic.keys())
    for i in find_drink_id_dic:
        print(find_drink_id_dic[i])
        this_data = find_drink_id_dic[i]
        for k in range(10):
            this_id = this_data[k]['drink_id']

            if i == 0:
                cur.execute(RANKING_TOTAL_UPDATE, (str(this_id), str(k+1)))
                print("update total", k+1, " drink : ", this_id)
            
            elif i == 1:
                cur.execute(RANKING_MALE_UPDATE, (str(this_id), str(k)))
                print("update male", k+1, " drink : ", this_id)
            
            elif i == 2:
                cur.execute(RANKING_FEMALE_UPDATE, (str(this_id), str(k)))
                print("update female", k+1, " drink : ", this_id)
    
    
    conn.close()

    return find_drink_id_dic




# if __name__ == "__main__":
#     app.run()


# @app.route('/')
# def hello():
#     make_drink_data()
#     app.run()

if __name__ == "__main__":
#     init_scheduler()
    app.run(host="0.0.0.0", port=int("5000"), debug=True)