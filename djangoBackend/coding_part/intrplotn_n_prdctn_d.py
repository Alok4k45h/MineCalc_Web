# Implementation of Linear Interpolation using Python3 code
# Importing library
from scipy.interpolate import interp1d
import pandas as pd

df_prcd=pd.read_csv("./crrspndg_sig_preprcessed_to_matchup.csv")
sig_in_prcd = df_prcd['in_vol_sig']
sig_out_prcd = df_prcd['out_vol_sig']


X = sig_in_prcd
Y = sig_out_prcd 

# Finding the interpolation
y_interp = interp1d(X, Y,kind='cubic')


# testing
trl=100
print("Value of Y at x = {} is".format(trl),y_interp(trl))