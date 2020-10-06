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
    response = pd.read_sql("SELECT * FROM all_totals_global", engine)
    return Response(response.to_json(orient = "records", date_format="iso"), mimetype="application/json")

if __name__ == "__main__":
    app.run()