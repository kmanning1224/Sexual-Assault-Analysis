import sqlite3
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy import and_, or_
from os import environ, path

from flask import Flask, jsonify
app = Flask(__name__)
Base = automap_base()
#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:////Users/katma/Documents/GitHub/Trilogoy/Homework/Project-2/templates/trafficking.db")

# reflect an existing database into a new model

# reflect the tables
Base.prepare(engine, reflect=True)

Base.classes.keys()