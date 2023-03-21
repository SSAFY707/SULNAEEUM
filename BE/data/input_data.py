import csv
import pymysql

# DB 설정
conn = pymysql.connect(host='localhost',
                       user='root',
                       password='a710&soez&mtc',
                       db='sulnaeeum',
                       charset='utf8')

# 술 추가
insert_drink = "INSERT INTO drink (drink_name, drink_info, drink_sale_url, drink_price, drink_amount, drink_level, drink_type_id, like_cnt, review_cnt) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"

# 술 종류 추가
insert_drink_type = "INSERT INTO drink_type (drink_type_name) VALUES (%s)"

# 재료 추가
insert_ingredient = "INSERT INTO ingredient_type (ingredient_name) VALUES (%s)"

# 안주 추가
insert_dish = "INSERT INTO dish (dish_category, dish_name) VALUES (%s, %s)"

# 술-재료 추가
insert_drink_ingredient = "INSERT INTO ingredient (drink_id, ingredient_type_id) VALUES (%s, %s)"

# 술-안주 추가
insert_drink_dish = "INSERT INTO dish_drink (drink_id, dish_id) VALUES (%s, %s)"

# 술-맛 추가
insert_taste = "INSERT INTO taste (drink_id, taste_type_id, score) VALUES (%s, %s, %s)"

 
# CSV 파일 읽기
drink_file = open('../data_1.csv', 'r', encoding='cp949')
drink_rdr = csv.reader(drink_file)


# 술
dic_drink = {}

# 전통주 전체 재료
dic_all_ingredient = {}

# 전통주 전체 안주
dic_all_dish = {}

# 술 전체 맛
dic_all_taste = {"단맛":1, "신맛":2, "바디감":3, "청량감":4, "향":5, "목넘김":6}

# 술 전체 종류
dic_all_type = {}

# 술에 들어간 재료
dic_ingredient = {}

# 술에 어울리는 안주
dic_dish = {}

# 술에서 나는 맛
dic_taste = {}


# 술 ID
drink_id = 1

# 재료 ID
ingredient_id = 1

# 안주 ID
dish_id = 1

# 술 종류 ID
drink_type_id = 1


# 데이터 입력
for line in drink_rdr:
    drink_name = line[0].strip()
    drink_level = line[1].strip()

    # 첫줄은 pass
    if drink_name == "전통주명":
        continue
    
    cur = conn.cursor()

    # 재료
    ingredient = line[3]

    ingredient = ingredient.replace(",", ", ")
    ingredient = ingredient.replace(" ,", ", ")
    ingredient = ingredient.replace("(", ", ")
    ingredient = ingredient.replace(")", "")
    ingredient = ingredient.replace(" ", "")

    ingredient = ingredient.split(",")

    # 안주
    dish = line[10]

    dish = dish.split(":")
    if len(dish) > 1:
        dish[1] = dish[1].split(",")

    # 맛
    taste = line[9]
    taste = taste.split(",")

    taste_type = {"단맛":0, "신맛":0, "바디감":3, "청량감":0, "향":0, "목넘김":3}
    
    for i in range(len(taste)):
        taste[i] = taste[i].replace(" ", "")
        taste[i] = taste[i].split(":")
        if taste[i][0] == "균형감":
            continue
        if len(taste[i]) > 1:
            taste_type[taste[i][0]] = taste[i][1]


    # 술 종류
    drink_type = line[6]

    # 술 정보
    drink_info = line[8]

    # 술 url
    drink_url = line[7]

    # 술 가격
    drink_price = line[5]

    # 술 도수
    drink_level = line[1]

    # 술 용량
    drink_amount = line[2]


    # 이번 라인에서 전체에 추가할 재료
    all_ingredient_list = []
    # 이번 술에서 들어간 재료
    this_ingredient_list = []
    # 이번 라인에서 전체에 추가할 안주
    all_dish_list = []
    # 이번 술에서 들어간 안주
    this_dish_list = []


    # 이번 라인의 재료 데이터 정리
    for i in ingredient:
        if i in dic_all_ingredient:
            this_ingredient_list.append(dic_all_ingredient[i])
        else:
            dic_all_ingredient[i] = ingredient_id
            this_ingredient_list.append(dic_all_ingredient[i])
            ingredient_id += 1
            all_ingredient_list.append(i)

    # 이번 라인의 안주 데이터 정리
    if len(dish) > 1:
        for s in dish[1]:
            if s in dic_all_dish:
                this_dish_list.append(dic_all_dish[s])
            else:
                dic_all_dish[s] = dish_id
                this_dish_list.append(dic_all_dish[s])
                dish_id += 1
                all_dish_list.append(s)


    # 술 종류 추가
    if not drink_type in dic_all_type:
        dic_all_type[drink_type] = drink_type_id
        cur.execute(insert_drink_type, drink_type)
        drink_type_id += 1
        
    conn.commit()


    # 술 추가
    #drink_name, drink_info, drink_sale_url, drink_price, drink_amount, drink_level, drink_type_id, like_cnt, review_cnt
    cur.execute(insert_drink, (drink_name, drink_info, drink_url, drink_price, drink_amount, drink_level, dic_all_type[drink_type], "0", "0"))
    print(drink_name, " ", drink_level, " ", " : 입력 완료")

    # 재료 추가
    for a in all_ingredient_list:
        cur.execute(insert_ingredient, a)
        print(a, " : 입력 완료")

    # 안주 추가
    for a in all_dish_list:
        if len(dish) > 1:
            cur.execute(insert_dish, (dish[0], a))
        else:
            cur.execute(insert_dish, ("기타", dish[0]))
        print(dish[0], " - ", a, " : 입력 완료")
        
    conn.commit()


    # 술에 들어간 재료 추가
    for i in range(len(this_ingredient_list)):
        print(drink_id, " ", this_ingredient_list[i], " ", " : 입력 중...")
        cur.execute(insert_drink_ingredient, (drink_id, this_ingredient_list[i]))
        print(drink_id, " ", this_ingredient_list[i], " ", " : 입력 완료")

    # 술에 들어간 안주 추가
    for i in range(len(this_dish_list)):
        print(drink_id, " ", this_dish_list[i], " ", " : 입력 중...")
        cur.execute(insert_drink_dish, (drink_id, this_dish_list[i]))
        print(drink_id, " ", this_dish_list[i], " ", " : 입력 완료")

    # 술에 들어간 맛 추가
    for t in taste_type.keys():
        print(drink_id, " ", drink_name, " - ", t, " = ", taste_type[t], " : 입력 중...")
        cur.execute(insert_taste, (drink_id, dic_all_taste[t], taste_type[t]))
        print(drink_id, " ", drink_name, " - ", t, " : 입력 완료")

    drink_id += 1

conn.close()
drink_file.close()


