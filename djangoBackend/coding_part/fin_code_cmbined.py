# Importing library
from scipy.interpolate import interp1d
# import pandas as pd
# Import math Library
import math
from joblib import Parallel, delayed
import joblib

# --------                  a) Rotary Percussive:

## ``````  USBM, 1969  .... Done
# result in def function form

usbm_crs_eo = joblib.load('usbm_crs-to-specific_energy.pkl')
ucs_crs = joblib.load('ucs_crs.pkl')

def usbm_vp(Pm,Rc,D,Ucs):
    Eo=usbm_crs_eo(ucs_crs(Ucs))
    Vp= (48*Pm*Rc)/(math.pi*d**2*Eo)
    return Vp

## ````````  Norway, 1979



## ```````` Benaola, 1985 .... Done

# result in def function form
def Benaola_vp(Eg,ng,D,Ip):
    Lf=1.7*D-0.7
    Vp= (Eg*ng/(D*Lf**0.5))*1e-6*(51*Ip+90)
    return Vp


## ---------                b) Rotary:

## `````` Bauer and Calder, 1967 ... Done

# result in def function form
def Calder_and_Workman_vp(k,E,Rc):
    rhs=k*(math.log10(E/(Rc/12)))
    Vp= 6*(10**rhs)
    return Vp


##```````` Baurer, 1971 .... Done
# result in def function form
def baurer_vp(Rc,E,D,Nr):
    Vp= (61-28*math.log10(Rc))*(E/D)*(Nr/300)
    return Vp


##```````` Calder and Workman, 1994..... Done


ucs_rpf_Calder_and_Workman = joblib.load('ucs-rpf_Calder_and_Workman.pkl')
# result in def function form
def baurer_vp(Rc,E,Nr):
    Rf=ucs_rpf_Calder_and_Workman(Rc)
    Vp= 57e-6*(Rf-28*math.log10(0.145*Rc))*E*Nr 
    return Vp








