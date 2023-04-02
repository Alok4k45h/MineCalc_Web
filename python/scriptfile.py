import math
import pandas as pd
data = pd.read_csv(r"..\res\temp\burdenspacing.csv")
#formula
a=data["Burden(m):"]
b=data["Spacing(m):"]
c=data["Height(m):"]
d=data["Stemming(m):"]
e=data["Diameter(mm):"]
f=data["Subdrill(m):"]
g=data["Density of Explosive(kg/m3):"]
#h=data["PowderFactor(kg/m3)"]
data["PowderFactor(kg/m3)"]=((math.pi*e**2/4)*(c+f-d)*g)/(a*b*c)
data.to_csv(r"..\res\temp\burdenspacing.csv", index=False)
print(data)
print("code completed")
