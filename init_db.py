import pandas as pd 
from sqlalchemy import create_engine
from config import cxnstring


df1 = pd.read_csv('Data/Alltotals_global_dataset_2020.csv').reset_index(drop=True)
df1 = pd.DataFrame(df1)
df1.reset_index(drop=True)
df1.to_sql(name="assault_table_db2", con=create_engine(cxnstring), if_exists="append")


df2 = pd.read_csv('Data/csvData.csv').reset_index(drop=True)
df2 = pd.DataFrame(df2)
df2.reset_index(drop=True)
df2.to_sql(name="assault_per_state2", con=create_engine(cxnstring), if_exists="append")


df3 = pd.read_csv('Data/new_global_dataset_2020.csv').reset_index(drop=True)
df3.to_sql(name="all_totals_global", con=create_engine(cxnstring), if_exists="append")


df4 = pd.read_csv('Data/totalsGender_global_dataset_2020.csv').reset_index(drop=True)
df3.to_sql(name="totals_gender", con=create_engine(cxnstring), if_exists="append")
