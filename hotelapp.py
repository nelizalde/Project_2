
#Importing required modules
from flask import Flask, jsonify
from flask import render_template, request
import csv 
import pandas as pd
# #Create a Flask app
app = Flask(__name__)
# CORS(app)

# import csv
@app.route("/")
def index():
    first_line = True
  
# Return template and data
    return render_template("index.html")

#second route
@app.route("/data")
def data_route():
    with open('/Users/yanyibing/Desktop/BOOTCAMPHW/Project_2/Project_2/Project_2/europetop.csv') as csv_file:
        data = pd.read_csv(csv_file, delimiter=',')
        return jsonify(data.to_json())

if __name__ == "__main__":
      app.run(debug=True)