import os
dbuser = "vvyflfsgkzeqrz"
dbpw = "4e33bb43a68544c07bd87cc445f24841a3e937d808ff9e3e6b98b7d9d303c313"
dbhost = "ec2-54-197-254-117.compute-1.amazonaws.com"
dbengine = "postgresql"
db = "d7mkngu9oaro6h"
cxnstring = (os.environ["DATABASE_URL"] if os.getenv("DATABASE_URL")
else f"{dbengine}://{dbuser}:{dbpw}@{dbhost}/{db}")
# cxnstring = "sqlite:///assaultdb.sqlite"