import csv
import urllib.request
import requests
from bs4 import BeautifulSoup as bs
import pymysql
import boto3
from botocore.client import Config

#S3
AWS_ACCESS_KEY_ID ="AKIA5LR33YUVXC3XRBVF"
AWS_SECRET_ACCESS_KEY = "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"
AWS_DEFAULT_REGION = "ap-northeast-2"
BUCKET_NAME = "sulnaeeum"

s3 = boto3.resource(
        's3',
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
        config=Config(signature_version='s3v4')
    )


drink_file = open('../data_1.csv', 'r', encoding='cp949')
drink_rdr = csv.reader(drink_file)

conn = pymysql.connect(host='localhost',
                       user='root',
                       password='a710&soez&mtc',
                       db='sulnaeeum',
                       charset='utf8')

# 술 이미지 저장
insert_img = "UPDATE drink SET drink_image = %s where drink_name = %s"


drink_id = 0

for line in drink_rdr:
    print(drink_id)
    drink_id += 1
    drink_name = line[0].strip()

    # 첫줄은 pass
    if drink_name == "전통주명":
        continue
    # if drink_id == 140:
    #     break

    encText = urllib.parse.quote(drink_name)

   # 사진 url 가져오기
    the_l = "https://thesool.com/front/find/M000000082/list.do?searchType=2&searchKey=&searchKind=&levelType=&searchString=" + encText + "&productId=&pageIndex=1&categoryNm=&kind="
    page = requests.get(the_l)
    soup = bs(page.text, "html.parser")

    elements = soup.find_all('img')

    find_str = "PRODUCT"
    result = ""

    for e in elements:
        e_src = e.get('src')

        if find_str in e_src:
            result = e_src
    
    result = "https://thesool.com"+result


    # DB 저장하기
    cur = conn.cursor()

    if result != "https://thesool.com":
        # 실제 사진 저장
        url_name = drink_name.replace("/", "")
        url_name = url_name.replace(" ", "")
        url = "./img/" + str(drink_id) + ".jpg"
        urllib.request.urlretrieve(result, url)

        # S3에 저장
        data = open(url, 'rb')
        save_data = "drink/" + str(drink_id) + ".jpg"
        s3.Bucket(BUCKET_NAME).put_object(
                Key=save_data, Body=data, ContentType='image/jpg')

        # DB에 저장
        save_url = "https://sulnaeeum.s3.ap-northeast-2.amazonaws.com/" + save_data
        cur.execute(insert_img, (save_url, drink_name))
        print(drink_name, " => ", save_url,  " : 저장완료") 
    else:
        print(drink_name, "저장파일 없음")
    
    conn.commit()

drink_file.close()