from django.shortcuts import render
import datetime
import json

# Create your views here.
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


def index(request):
    # print(request)
    return HttpResponse("Hello, world. You're at the polls index.")

def index1(request):
    return HttpResponse("Hel1, world. You're at the polls index.")


from hndle_urls.pycode_frmls.fin_code_cmbined import *

@csrf_exempt 
def req_usbm_vp(request):       # --- http://localhost:8001/hndl_url/req_usbm_vp
    # print("hi",request)
    # return HttpResponse("okay")
    bdy=request.body.decode()
    # print(type(bdy))
    data = json.loads(bdy)
    print(data)
    pm=float(data["p"])
    rc=float(data["r"])
    d=float(data["d"])
    ucs=float(data["RC"])
    # print("usbm: ",usbm_vp(2,4,6,80))
    print("usbm: ",usbm_vp(pm,rc,d,ucs))
    return HttpResponse(usbm_vp(pm,rc,d,ucs))

@csrf_exempt 
def norway_vp(request):
    # print("hi",request.body)
    # return HttpResponse("okay")
    bdy=request.body.decode()
    # print(type(bdy))
    data = json.loads(bdy)
    print(data)
    b=float(data["b"])
    sj=float(data["sj"])
    drm=data["drm"]
    # print("usbm: ",usbm_vp(2,4,6,80))
    print("norway_vp: ",dri_to_drilng_rt(brtnl_sj_to_dri(b,sj),drm))
    return HttpResponse(dri_to_drilng_rt(brtnl_sj_to_dri(b,sj),drm))

@csrf_exempt 
def req_Benaola_vp(request):
    # print("hi",request.body)
    # return HttpResponse("okay")
    bdy=request.body.decode()
    # print(type(bdy))
    data = json.loads(bdy)
    print(data)
    Eg=float(data["Eg"])
    ng=float(data["ng"])
    D=float(data["D"])
    Ip=float(data["Ip"])
    # print("usbm: ",usbm_vp(2,4,6,80))
    print("Benaola_vp: ",Benaola_vp(Eg,ng,D,Ip))
    return HttpResponse(Benaola_vp(Eg,ng,D,Ip))

@csrf_exempt 
def req_Calder_and_Workman_vp(request):
    # print("hi",request.body)
    # return HttpResponse("okay")
    bdy=request.body.decode()
    # print(type(bdy))
    data = json.loads(bdy)
    print(data)
    k=float(data["k"])
    E=float(data["E"])
    Rc=float(data["Rc"])
    # ucs=float(data["RC"])
    # print("usbm: ",usbm_vp(2,4,6,80))
    print("Calder_and_Workman_vp: ",Calder_and_Workman_vp(k,E,Rc))
    return HttpResponse(Calder_and_Workman_vp(k,E,Rc))



@csrf_exempt 
def req_baurer_vp(request):
    # print("hi",request.body)
    # return HttpResponse("okay")
    bdy=request.body.decode()
    # print(type(bdy))
    data = json.loads(bdy)
    print(data)
    Rc=float(data["Rc"])
    E=float(data["E"])
    D=float(data["D"])
    Nr=float(data["Nr"])
    # print("usbm: ",usbm_vp(2,4,6,80))
    print("baurer_vp: ",baurer_vp(Rc,E,D,Nr))
    return HttpResponse(baurer_vp(Rc,E,D,Nr))


@csrf_exempt 
def req_Calder_Workman(request):
    # print("hi",request.body)
    # return HttpResponse("okay")
    bdy=request.body.decode()
    # print(type(bdy))
    data = json.loads(bdy)
    print(data)
    Rc=float(data["RC"])
    f=float(data["f"])
    D=float(data["d"])
    Nr=float(data["n"])
    E=f/D       #Feed Force(f)/Blasthole Diameter(D)  in kg/mm
    # print("usbm: ",usbm_vp(2,4,6,80))
    print("Calder_Workman: ",Calder_Workman(Rc,E,Nr))
    return HttpResponse(Calder_Workman(Rc,E,Nr))


## ********* debugging code zone

def chckng_cd_wrkng(request):
    global incm_veh
    global vh_crnt_pos
    global vh_id_pos_n_tm
    dt_to_disply=fomtng_disply()
    # print(incm_veh)
    # print(dt_to_disply)
    return HttpResponse(dt_to_disply)
    pass

def fomtng_disply():
    global incm_veh
    global vh_crnt_pos
    global vh_id_pos_n_tm
    temp=""
    temp=temp+"veh_currnt_pos:-"+str(vh_crnt_pos)+"<br>"
    # print("hello")
    # print(vh_id_pos_n_tm)
    # try:
    for i in vh_id_pos_n_tm:
        try:
            temp+=i[0]+","
        except:
            temp+="None"+","
        temp+=i[1].strftime("%m/%d/%Y, %H:%M:%S")+","
        try:
            temp+=i[2]+","
        except:
            temp+="None"+","
        temp+="<br>"
    # except:
    #     pass
    return temp
    pass


def fr_snd_dta(addrs,tm,data):
    # result = firebase.post(addrs,json.dumps(data))
    # result = firebase.patch("/s2_return/temp/-NQRK4MPxH_ysbWlKadz.json/",json.dumps(data))
    result = db.child(addrs).child(tm).set(data)
    print("Data send to firebase:-",result)
    pass


'''
rough here



'''

'''
references

https://www.tutorialspoint.com/How-can-I-convert-bytes-to-a-Python-string
'''