# Importing library
# from scipy.interpolate import interp1d
# import pandas as pd
# Import math Library
import math
from joblib import Parallel, delayed
import joblib
import os

# dir_pth=os.path.dirname(os.path.basename(__file__))
dir_pth=os.path.dirname(__file__)
# print(dir_pth)
# --------                  a) Rotary Percussive:

## ``````  USBM, 1969  .... Done
# result in def function form
# print(dir_pth+'\\usbm_crs-to-specific_energy.pkl')

usbm_crs_eo = joblib.load(dir_pth+'/usbm_crs-to-specific_energy.pkl')
ucs_crs = joblib.load(dir_pth+'/ucs_crs.pkl')

def usbm_vp(Pm,Rc,D,Ucs):
    Eo=usbm_crs_eo(ucs_crs(Ucs))
    Vp= (48*Pm*Rc)/(math.pi*D**2*Eo)
    return Vp

# {"Pm":"2","Rc":"4","D":"6","Ucs":"80"}
# print("usbm: ",usbm_vp(2,4,6,80))

## ````````  Norway, 1979
def brtnl_sj_to_dri(brtnl=50,sj=20):
    m=-2e-05*sj + 1.0038
    # print(c)
    c=7.2718*math.log(sj) - 13.57
    # print(math.log(sj))
    dri=m*brtnl+c
    return dri
    pass

def dri_to_drilng_rt(dri,mth="RotaryConventional DTH"):
    # if mth=="RotaryConventional DTH":
    if mth=="conventionalDTH":
        ini=0.448221*dri-0.0793235
        fin=0.536506*dri+0.759075
        # return [ini,fin]
        # return (str(ini)+" to "+str(fin))
    # if mth=="RotaryHammer(25bar)":
    if mth=="rotary":
        ini=0.536506*dri+0.759075
        fin= 0.709966*dri+2.9518
        # fin=0.937152*dri+3.85158
        # fin=1.22463*dri+5.5157
        # return [ini,fin]
        # return (str(ini)+" to "+str(fin))
    # if mth=="High Pressure DTH":
    if mth=="highPressureDTH":
        ini=0.937152*dri+3.85158
        fin=1.22463*dri+5.5157
        # fin=1.39549*dri+9.70114
        # return [ini,fin]
        # return (str(ini)+" to "+str(fin))
        # return (str(round(ini,5))+" to "+str(round(fin,5)))
    # if mth=="Pneumatic Top Hammer":
    if mth=="pneumaticTopHammer":
        ini=1.22463*dri+5.5157
        fin=1.39549*dri+9.70114
        # fin=1.61933*dri+18.0871
        # return (str(ini)+" to "+str(fin))
        # return (str(round(ini,5))+" to "+str(round(fin,5)))
    # if mth=="Hydraulic Top Hammer":
    if mth=="hydraulicTopHammer":
        ini=1.61933*dri+18.0871
        fin=1.96791*dri+21.963
        # return [ini,fin]
        # print(str(round(ini,5))+" to "+str(round(fin,5)))
    return (str(round(ini,5))+" to "+str(round(fin,5)))


# dri_to_drilng_rt(brtnl_sj_to_dri())

## ```````` Benaola, 1985 .... Done

# result in def function form
def Benaola_vp(Eg,ng,D,Ip):
    Lf=1.7*D-0.7
    Vp= (Eg*ng/(D*Lf**0.5))*1e-6*(51*Ip+90)
    return Vp
# print("Beneloa: ",Benaola_vp(2,4,6,80))

## ---------                b) Rotary:

## `````` Bauer and Calder, 1967 ... Done

# result in def function form
def Calder_and_Workman_vp(k,E,Rc):
    rhs=k*(math.log10(E/(Rc/12)))
    Vp= 6*(10**rhs)
    return Vp
# print("Calder_and_Workman_vp: ",Calder_and_Workman_vp(2,4,6))

##```````` Baurer, 1971 .... Done
# result in def function form
def baurer_vp(Rc,E,D,Nr):
    Vp= (61-28*math.log10(Rc))*(E/D)*(Nr/300)
    return Vp
# print("baurer_vp: ",baurer_vp(2,4,6,98))


##```````` Calder and Workman, 1994..... Done


ucs_rpf_Calder_and_Workman = joblib.load(dir_pth+'/ucs-rpf_Calder_and_Workman.pkl')
# result in def function form
def Calder_Workman(Rc,E,Nr):
    Rf=ucs_rpf_Calder_and_Workman(Rc)
    Vp= 57e-6*(Rf-28*math.log10(0.145*Rc))*E*Nr 
    return Vp
# print("Calder_Workman: ",Calder_Workman(7,4,6))





# reference 
# https://note.nkmk.me/en/python-script-file-path/#:~:text=os.,-getcwd()%20and&text=Run%20it%20with%20the%20python%20(or%20python3%20)%20command.&text=You%20can%20get%20the%20absolute,stored%20in%20__file__%20.
# https://www.dcode.fr/function-equation-finder
