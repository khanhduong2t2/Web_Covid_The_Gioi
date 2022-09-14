from covid import Covid
import json
covid = Covid(source="worldometers")

x = covid.get_data()
print(x)
list_country_2 = []
for i in x:
   list_country_2.append(i['country'])
del list_country_2[0:8]

world = covid.get_status_by_country_name('world')

aDict = [
    {
        "country": world['country'],
        "confirmed": world['confirmed'],
        "deaths": world['deaths'],
        "recovered": world['recovered']
    }
]

list_country = ['USA','India','Brazil','UK','Italy','Germany','Malaysia','Thailand','VietNam','Singapore','China']
# print(list_country)

for country in list_country_2:
    x = covid.get_status_by_country_name(country)
    x = {
        "country": x['country'],
        "confirmed": x['confirmed'],
        "deaths": x['deaths'],
        "recovered": x['recovered']
    }
    aDict.append(x)

jsonString = json.dumps(aDict)
jsonFile = open("Nhom4_Web_Covid_The_Gioi/static/model/data.json", "w")
jsonFile.write(jsonString)
jsonFile.close()

