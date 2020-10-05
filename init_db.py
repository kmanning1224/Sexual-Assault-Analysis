import pandas as pd 
from sqlalchemy import create_engine
from config import cxnstring


pd.read_csv('Data/Alltotals_global_dataset_2020.csv').to_sql(name="assault_table_db", con=create_engine(cxnstring), index=False)