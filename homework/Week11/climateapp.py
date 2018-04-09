import datetime as dt
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


# Database Setup

engine = create_engine("sqlite:///hawaii.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Passenger = Base.classes.passenger

# Create our session (link) from Python to the DB
session = Session(engine)


# Flask Setup

app = Flask(__name__)



# Flask Routes


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations"
        f"/api/v1.0/tobs"
        f"/api/v1.0/<start>/<end>"
    )

@app.route("/api/v1.0/precipitation")
def names():
  # * Query for the dates and temperature observations from the last year.

  # * Convert the query results to a Dictionary using `date` as the key and `tobs` as the value.

  # * Return the json representation of your dictionary.

  	#Solution: will take the temperature observations from last available year of 
  	#		   data. Also, will take only station ending with 9281 because there are
  	#		   more than 1 stations.
  	
    results = session.query(meas.date, meas.tobs).\
    filter(meas.date>'2016-08-22').filter(meas.station=='USC00519281')

    # Convert list of tuples into normal list
    all_names = list(np.ravel(results))

    return jsonify(all_names)




if __name__ == '__main__':
    app.run(debug=True)

