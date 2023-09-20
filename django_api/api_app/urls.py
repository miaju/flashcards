from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, SetViewSet, CardViewSet, SetsByUserView, CardsBySetsView

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'sets', SetViewSet)
router.register(r'cards', CardViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('sets/user/<int:user_id>/', SetsByUserView.as_view(), name='user-sets'),
    path('cards/sets/<int:set_id>/', CardsBySetsView.as_view(), name='set-cards')
]
