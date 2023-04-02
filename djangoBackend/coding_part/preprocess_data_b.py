# data preprocessing to make suitable for interpolation

import numpy as np
import pandas as pd


df_load_csv=pd.read_csv("../data/ucs-rpf_Calder_and_Workman.csv")
x1 = df_load_csv['ucs']
y1 = df_load_csv['rpf']


x1_arr=np.array(x1)
y1_arr=np.array(y1)
x1_arr_res_plus_mius=2*(x1_arr.max()-x1_arr.min())/len(x1_arr)
def in_to_out_match(val_in,res_plus_mius=x1_arr_res_plus_mius):
    # print(x1)
    ngt=val_in-res_plus_mius
    pst=val_in+res_plus_mius
    y_tmp_arr=y1_arr[np.logical_and(ngt<x1_arr,x1_arr<pst).nonzero()]
    if len(y_tmp_arr)!=0:           # most critical part of code
        tmp=np.average(y_tmp_arr)
    else:
        tmp=y1_arr[(np.abs(x1_arr-val_in)).argmin()]
    return tmp
    pass


# in_vol=np.linspace(-320,320,1000)   # 1000 samples
# in_vol=np.arange(-320,320,0.1)    # 0.1 as resolution
in_vol=np.arange(np.min(x1_arr),np.max(x1_arr),1)    # 0.1 as resolution

out_vol=[]   #np.array()

for i in in_vol:
    out_vol.append(in_to_out_match(i))


#----------- add preporcesd data to csv file

# importing pandas
# import pandas as pd

# creating a DataFrame
data = {
   'ucs': in_vol.tolist(),
   'rpf': out_vol,
}
dataframe = pd.DataFrame(data)
dataframe.to_csv('sig_preprsed_to_ucs-rpf_Calder_and_Workman.csv', index=False)