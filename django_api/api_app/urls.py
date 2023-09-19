from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, SetViewSet, CardViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'sets', SetViewSet)
router.register(r'cards', CardViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
