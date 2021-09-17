
import psycopg2
from psycopg2 import Error
from settings import *

try:
    connection = psycopg2.connect(user=USER,
                                  password=PASSWORD,
                                  host=HOST,
                                  port=PORT,
                                  database="bank_db")

    # --------------Створення  таблиць -------------------------------------------
    cursor = connection.cursor()
    create_juvenile_police_officer = '''CREATE TABLE if not exists list_bank
                                        (ID SERIAL  PRIMARY KEY,
                                        name varchar(100) NOT NULL,
                                        rate float(10) NOT NULL,
                                        max_loan float(10) NOT NULL,
                                        min_payment float(10) NOT NULL,
                                        commission int NOT NULL,
                                        loan_term float(10) NOT NULL); '''
    cursor.execute(create_juvenile_police_officer)
    connection.commit()
    print("The table was successfully created in PostgreSQL")
    # ---------------------------------------------------------------
    list_bank = {
        'bank_1': ['Trast-Capital',	23,	50500,	3,	1,	60],
        'bank_2': ['A-Bank',	75,	18700,	0,	0,	10],
        'bank_3': ['Aval',	29,	9300,	0,	5,	60, ],
        'bank_4': ['Oschadbank',	29,	9300,	0,	5,	60],
        'bank_5': ['Privatbank',	12,	150000,	0,	1,	240],
        'bank_6': ['Raiffeisen Bank',	23,	18700,	0,	0,	72]
    }
    i = 1
    for key in list_bank:
        print(list_bank[key][0], list_bank[key][1])
# --------------Добовлення даних в bank --------------------------
    cursor = connection.cursor()
    for key in list_bank:
        bank_add = f""" INSERT INTO  list_bank (id, name, rate, max_loan, min_payment, commission, loan_term)
                        VALUES
                        ({i},'{list_bank[key][0]}',{list_bank[key][1]},{list_bank[key][2]},{list_bank[key][3]},{list_bank[key][4]},{list_bank[key][5]})
                            """
        i += 1
        cursor.execute(bank_add)

    connection.commit()
    print("Record inserted successfully")

except (Exception, Error) as error:
    print("Error while working with PostgreSQL", error)
finally:
    if connection:
        cursor.close()
        connection.close()
    print("PostgreSQL connection closed")
