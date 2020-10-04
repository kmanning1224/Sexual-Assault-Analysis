import os

dbusr = "postgres"
dbpwd = "postgres"
dbhost = "localhost"
dbengine = "postgresql"
db = "postgres"
cxnstring = (os.environ["postgresql://postgres:postgres@localhost:5432/assault_db2"] if os.getenv("postgresql://postgres:postgres@localhost:5432/assault_db2")
    else f"{dbengine}://{dbusr}:{dbpwd}@{dbhost}/{db}")
cxnstring = "sqlite:///my_db.sqlite"