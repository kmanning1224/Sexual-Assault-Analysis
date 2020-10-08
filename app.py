from flask import Flask, Response, render_template, jsonify,redirect, url_for, send_from_directory
import pandas as pd 
from sqlalchemy import create_engine
from sqlalchemy import BigInteger, Column, JSON, Text
from config import cxnstring
import psycopg2
import sys
import requests
import json
import os
app = Flask(__name__, static_folder=os.path.abspath('C:/Users/katma/Documents/GitHub/Trilogoy/Homework/Project-2'))

engine = create_engine(cxnstring, pool_recycle=3600)


# , pool_recycle=3600
@app.route("/")
def index():
    with engine.connect() as con:
        #query result from sqlalchemy + postgres
        year = con.execute ("""SELECT DISTINCT (assault_table_db."yearOfRegistration") FROM assault_table_db;""")
        gender = con.execute (""" SELECT DISTINCT (totals_gender."gender")FROM totals_gender; """)
        # gender =-
        #cleaning results, removing uneeded values from tuple i.e( (,))
        years = [y[0] for y in year]
        gender = [g[0] for g in gender]

    return render_template("home.html", years=years, gender=gender)


@app.route("/api/<year>/<gender>")
def apitest(years,gender):
    with engine.connect() as con:
        gender = con.execute (""" SELECT DISTINCT (totals_gender."gender") WHERE (totals_gender.yearOfRegistration") {year}, WHERE (totals_gender.gender) {gender} FROM totals_gender; """)
        year = con.execute (""" SELECT DISTINCT (totals_gender."year"), (totals_gender.yearOfRegistration") {year}, WHERE (totals_gender.gender) {gender} FROM totals_gender; """)
        gender = [g[0] for g in gender]
        years = [y[0] for y in year]
        
    return render_template("home.html",gender=gender)
        
@app.route("/fulldate")
def psqltest():
    response = pd.read_sql("SELECT * FROM assault_table_db", engine)
    return Response(response.to_json(orient="records", date_format="iso"), mimetype="application/json")

@app.route("/assault_by_state")
def gender():
    response = pd.read_sql("SELECT * FROM assault_per_state", engine)
    return Response(response.to_json(orient = "records", date_format="iso"), mimetype="application/json")

@app.route("/gender")
def test():
    response = pd.read_sql("SELECT * FROM totals_gender", engine)
    return Response(response.to_json(orient = "records", date_format="iso"), mimetype="application/json")

@app.route("/fulldb_og")
def fulldb():
    response = pd.read_sql("SELECT * FROM all_totals_global", engine)
    return Response(response.to_json(orient = "records", date_format="iso"), mimetype="application/json")

@app.route('/static')
def static():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == "__main__":
    app.run()