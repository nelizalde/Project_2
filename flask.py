#Importing required modules
from zipfile import ZipFile
import os
import csv
pip install pandas
pip install wheel
import pandas as pd

zf = zipfile.ZipFile("cleaned_data.zip") # having First.csv zipped file.
df = pd.read_csv(zf.open('cleaned_data.csv'))

cleaned_data.head()

# file_name = "cleaned_data.zip"

# # opening the zip file in READ mode
# with ZipFile(file_name, 'r') as zip:
#     # printing all the contents of the zip file
#     zip.printdir()
  
#     # extracting all the files
#     zip.extractall()




# #import flask
# from flask import flask

# #create an app
# app = Flask(__name__)

# #Define home route
# @app.route("/")
# def home(): #what to so when a user hits the index route
#     #do something


# if __name__ =="__main___":
#     app.run(debug=True)