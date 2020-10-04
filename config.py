import os

class Config:
    SECRET_KEY =os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_UR = os.environ.get('DATABASE_URL')

    #sqlite:///trafficking.db

