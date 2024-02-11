from aifc import Error
import pandas as pd
from flask import Flask, jsonify, render_template
import sqlite3
import pandas as pd
from sqlalchemy import create_engine

def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as ex:
        print(ex)
    return conn

df = pd.read_csv("Adidas_Datasets.csv")
df['Total_Sales'] = df['Total_Sales'].replace('[\$,]', '', regex=True).astype(float)


connection = create_connection("demo.db")
df.to_sql("adidas_data", connection, if_exists="replace")
connection.close()

db_url = 'sqlite:///demo.db'
engine = create_engine(db_url, echo=True)

df_2 = pd.read_sql('SELECT Retailer, CAST(SUM(Total_Sales) AS FLOAT) AS TotalSales FROM adidas_data GROUP BY Retailer', engine)



df_3 = pd.read_sql('SELECT Product , CAST(SUM(Total_Sales) AS FLOAT) AS TotalSales FROM  adidas_data GROUP BY Product' , engine)




df_4 = pd.read_sql('SELECT Sales_Method , CAST(SUM(Total_Sales) AS FLOAT) AS TotalSales FROM  adidas_data GROUP BY Sales_Method' , engine)




df_5=pd.read_sql('SELECT Region , CAST(SUM(Total_Sales) AS FLOAT) AS TotalSales FROM  adidas_data GROUP BY Region', engine)

app = Flask(__name__)

@app.route('/')


def index():
    return render_template('index.html')

# ................................chart1(barchart).........................................
@app.route('/get-data/chart-1')

def get_data():
    
    print('Error: Something went wrong')
    Ret= df_2["Retailer"].tolist()
    Sal = df_2["TotalSales"].tolist()
    data = []
    
    for i in range(len(Ret)):
           
        data.append({"status":Ret[i] , "value": Sal[i]})
 
    return jsonify(data)

# ................................chart2(pie chart).........................................

@app.route('/get_data_chart_2')
def get_data_chart_2():
     
    Ret = df_3["Product"].tolist()
    Sal = df_3["TotalSales"].tolist()
    data = []
    
    for i in range(len(Ret)):
           
        data.append({"status":Ret[i] , "value": Sal[i]})
 
    return jsonify(data)

# ................................chart3(pyramid chart).........................................

@app.route('/get_data_chart_3')
def get_data_chart_3():
     
    Ret = df_4["Sales_Method"].tolist()
    Sal = df_4["TotalSales"].tolist()
    data = []
    
    for i in range(len(Ret)):
           
        data.append({"status":Ret[i] , "value": Sal[i]})
 
    return jsonify(data)


# ................................chart4(barchart).........................................
@app.route('/get_data_chart_4')
def get_data_chart_4():
     
    Ret = df_5["Region"].tolist()
    Sal = df_5["TotalSales"].tolist()
    data = []
    
    for i in range(len(Ret)):
           
        data.append({"status":Ret[i] , "value": Sal[i]})
 
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True,port=3000)
