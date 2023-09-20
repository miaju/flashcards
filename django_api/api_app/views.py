from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from .models import User, Set, Card
from .serializers import UserSerializer, SetSerializer, CardSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SetViewSet(viewsets.ModelViewSet):
    queryset = Set.objects.all()
    serializer_class = SetSerializer

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class SetsByUserView(generics.ListAPIView):
    serializer_class = SetSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']  # Get the user ID from the URL parameter
        return Set.objects.filter(user_id=user_id)

class CardsBySetsView(generics.ListAPIView):
    serializer_class = CardSerializer

    def get_queryset(self):
        set_id = self.kwargs['set_id']  # Get the set ID from the URL parameter
        return Card.objects.filter(set_id=set_id)
