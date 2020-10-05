import os
dbuser = "ozanjhjyyivzlm"
dbpw = "39da857ae1301adae785280dc1a1da959a74a0614d75f83446b0bbcc96b3e2c0"
dbhost = "ec2-34-231-56-78.compute-1.amazonaws.com"
dbengine = "postgresql"
db = "dcuvohmeofi05g"
cxnstring = (os.environ["DATABASE_URL"] if os.getenv("DATABASE_URL")
else f"{dbengine}://{dbuser}:{dbpw}@{dbhost}/{db}")
# cxnstring = "sqlite:///assaultdb.sqlite"