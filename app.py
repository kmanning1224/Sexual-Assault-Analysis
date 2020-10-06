from flask import Flask, Response, render_template, jsonify
import pandas as pd 
from sqlalchemy import create_engine
from sqlalchemy import BigInteger, Column, JSON, Text
from config import cxnstring
import psycopg2
import sys
import requests
import json
app = Flask(__name__)

engine = create_engine(cxnstring, pool_recycle=3600)

# , pool_recycle=3600
@app.route("/")
def index():
    return render_template("home.html")

@app.route("/fulldate")
def psqltest():
    response = pd.read_sql("SELECT * FROM assault_table_db", engine)
    return Response(response.to_json(orient="records", date_format="iso"), mimetype="application/json")

@app.route("/assault_by_state")
def gender():
    response = pd.read_sql("SELECT * FROM assault_per_state", engine)
    return Response(response.to_json(orient = "records", date_format="iso"), mimetype="application/json")

@app.route("/test")
def test():
    on = psycopg2.connect("postgres://ozanjhjyyivzlm:39da857ae1301adae785280dc1a1da959a74a0614d75f83446b0bbcc96b3e2c0@ec2-34-231-56-78.compute-1.amazonaws.com:5432/dcuvohmeofi05g")  
    cur = con.cursor()
    cur.execute("""select * from  assault_table_db""")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)

if __name__ == "__main__":
    app.run()