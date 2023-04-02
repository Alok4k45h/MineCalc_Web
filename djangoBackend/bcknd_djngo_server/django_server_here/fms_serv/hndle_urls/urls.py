from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('1', views.index1, name='index1'),
    # --- http://localhost:8001/hndl_url/req_usbm_vp
    path('req_usbm_vp', views.req_usbm_vp, name='req_usbm_vp'),

    # --- http://localhost:8001/hndl_url/norway_vp
    path('norway_vp', views.norway_vp, name='norway_vp'),

    # --- http://localhost:8001/hndl_url/req_Benaola_vp
    path('req_Benaola_vp', views.req_Benaola_vp, name='req_Benaola_vp'),

    # --- http://localhost:8001/hndl_url/req_Calder_and_Workman_vp
    path('req_Calder_and_Workman_vp', views.req_Calder_and_Workman_vp, name='req_Calder_and_Workman_vp'),

    # --- http://localhost:8001/hndl_url/req_baurer_vp
    path('req_baurer_vp', views.req_baurer_vp, name='req_baurer_vp'),

    # --- http://localhost:8001/hndl_url/req_Calder_Workman
    path('req_Calder_Workman', views.req_Calder_Workman, name='req_Calder_Workman'),


    ### others debugging------- http://192.168.137.1:8000/hndl_url/chckng_cd_wrkng
    # --- http://localhost:8001/hndl_url/chckng_cd_wrkng
    path('chckng_cd_wrkng', views.chckng_cd_wrkng, name='chckng_cd_wrkng'),    

]