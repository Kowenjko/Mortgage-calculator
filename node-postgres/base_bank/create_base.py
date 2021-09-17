import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from psycopg2 import Error
from settings import *

try:
    connection = psycopg2.connect(
        user=USER, password=PASSWORD, host=HOST, port=PORT)
    cursor = connection.cursor()
    connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)

    sql_create_query = 'CREATE DATABASE  bank_db'
    cursor.execute(sql_create_query)
except (Exception, Error) as error:
    print("Ошибка при работе с PostgreSQL", error)
finally:
    if connection:
        cursor.close()
        connection.close()
        print("Соединение с PostgreSQL закрыто")
