import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, MetaData

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data/oncampuscrime151617.sqlite"
db = SQLAlchemy(app)

engine = create_engine("sqlite:///data/oncampuscrime151617.sqlite")
metadata = MetaData()
metadata.reflect(engine, only=['crimes'])
# reflect an existing database into a new model
Base = automap_base(metadata=metadata)
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
crimeTable = Base.classes.crimes


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/crime/<UNITID>")
def crime(UNITID):

    sel = [
        crimeTable.UNITID,
        crimeTable.INSTITUTION,
        crimeTable.BRANCH,
        crimeTable.Address,
        crimeTable.City,
        crimeTable.State,
        crimeTable.Sector_desc,
        crimeTable.men_total,
        crimeTable.women_total,
        crimeTable.Total,
        crimeTable.MURD15,
        crimeTable.NEG_M15,
        crimeTable.RAPE15,
        crimeTable.FONDL15,
        crimeTable.INCES15,
        crimeTable.STATR15,
        crimeTable.ROBBE15,
        crimeTable.AGG_A15,
        crimeTable.BURGLA15,
        crimeTable.VEHIC15,
        crimeTable.ARSON15,
        crimeTable.MURD16,
        crimeTable.NEG_M16,
        crimeTable.RAPE16,
        crimeTable.FONDL16,
        crimeTable.INCES16,
        crimeTable.STATR16,
        crimeTable.ROBBE16,
        crimeTable.AGG_A16,
        crimeTable.BURGLA16,
        crimeTable.VEHIC16,
        crimeTable.ARSON16,
        crimeTable.MURD17,
        crimeTable.NEG_M17,
        crimeTable.RAPE17,
        crimeTable.FONDL17,
        crimeTable.INCES17,
        crimeTable.STATR17,
        crimeTable.ROBBE17,
        crimeTable.AGG_A17,
        crimeTable.BURGLA17,
        crimeTable.VEHIC17,
        crimeTable.ARSON17,
    ]

    results = db.session.query(*sel).filter(crimeTable.UNITID == UNITID).all()

    # Create a dictionary entry for each row of metadata information
    crime = {}
    for result in results:
        crime["UNITID"] = result[0]
        crime["INSTITUTION"] = result[1]
        crime["BRANCH"] = result[2]
        crime["Address"] = result[3]
        crime["City"] = result[4]
        crime["State"] = result[5]
        crime["Sector_desc"] = result[6]
        crime["men_total"] = result[7]
        crime["women_total"] = result[8]
        crime["Total"] = result[9]
        crime["MURD15"] = result[10]
        crime["NEG_MURD15"] = result[11]
        crime["RAPE15"] = result[12]
        crime["FONDL15"] = result[13]
        crime["INCES15"] = result[14]
        crime["STATR15"] = result[15]
        crime["ROBBE15"] = result[16]
        crime["AGG_A15"] = result[17]
        crime["BURGLA15"] = result[18]
        crime["VEHIC15"] = result[19]
        crime["ARSON15"] = result[20]
        crime["MURD16"] = result[21]
        crime["NEG_MURD16"] = result[22]
        crime["RAPE16"] = result[23]
        crime["FONDL16"] = result[24]
        crime["INCES16"] = result[25]
        crime["STATR16"] = result[26]
        crime["ROBBE16"] = result[27]
        crime["AGG_A16"] = result[28]
        crime["BURGLA16"] = result[29]
        crime["VEHIC16"] = result[30]
        crime["ARSON16"] = result[31]
        crime["MURD17"] = result[32]
        crime["NEG_MURD17"] = result[33]
        crime["RAPE17"] = result[34]
        crime["FONDL17"] = result[35]
        crime["INCES17"] = result[36]
        crime["STATR17"] = result[37]
        crime["ROBBE17"] = result[38]
        crime["AGG_A17"] = result[39]
        crime["BURGLA17"] = result[40]
        crime["VEHIC17"] = result[41]
        crime["ARSON17"] = result[42]

    print(crime)
    return jsonify(crime)


if __name__ == "__main__":
    app.run(debug=True)
