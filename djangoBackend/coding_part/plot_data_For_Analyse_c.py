
#--------- ploting data and analyse

#importing the basic libraries
import pandas as pd
import matplotlib.pyplot as plt


df_load_csv=pd.read_csv("./crrspndg_signal_to_matchup_with_311v_ppk_csv_file.csv")
x1 = df_load_csv['V(sig_in)']
y1 = df_load_csv['V(sig_out)']

# plotting the data
plt.plot(x1, y1, label = "tranfer_chrcts")
# function to show the plot
plt.show()