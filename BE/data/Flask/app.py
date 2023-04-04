from flask import Flask, request, jsonify
import pymysql
import numpy as np

app = Flask(__name__)


# 술 데이터
data_list = {}

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
@app.route("/ranking", methods=["POST"])
def ranking():
    parameter_dict = request.get_json()
    input_data = parameter_dict["input_data"]

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

            cur.execute(DRINK_INFO, str(drink_id))
            result = cur.fetchall()

            this_drink_list['drink_name'] = result[0][0]
            this_drink_list['drink_amount'] = result[0][1]
            this_drink_list['drink_level'] = result[0][2]
            this_drink_list['drink_image'] = result[0][3] 

            cur.execute(DRINK_INGREDIENT_ID, str(drink_id))
            ingredient_result_list = cur.fetchall()

            ingredient_list = []            

            for ingredient_result in ingredient_result_list:
                ingredient_id = ingredient_result[0]
                
                cur.execute(DRINK_INGREDIENT, str(ingredient_id))
                ingredient = cur.fetchall()[0][0]

                ingredient_list.append(ingredient)
            
            # print(ingredient_list)                                                                                                                                                                                   
            this_drink_list['drink_ingredient'] = ingredient_list

            # print(i+1, "위 : ", result, "(", drink_id, ") / 유사도 : ", find_list[i][1])
            # print(result, "술 정보 : ", data_list[drink_id-1])

            find_drink_id_dic[i].append(this_drink_list)

    print(find_drink_id_dic.keys())
    for i in find_drink_id_dic:
        print(find_drink_id_dic[i])
 
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