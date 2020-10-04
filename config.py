import os
dbuser = "postgres"
dbpw = "postgres"
dbhost = "localhost"
dbengine = "postgresql"
db = "assault_db"
cxnstring = (os.environ["DATABASE_URL"] if os.getenv("DATABASE_URL")
else f"{dbengine}://{dbuser}:{dbpw}@{dbhost}/{db}")
# cxnstring = "sqlite:///assaultdb.sqlite"