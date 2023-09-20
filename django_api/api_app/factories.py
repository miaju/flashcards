import factory
from faker import Faker
from .models import User, Set, Card

fake = Faker()

class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    email = factory.LazyAttribute(lambda _: fake.email())
    username = factory.LazyAttribute(lambda _: fake.user_name())
    password = factory.LazyAttribute(lambda _: fake.password())

class SetFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Set

    user = factory.SubFactory(UserFactory)
    title = factory.LazyAttribute(lambda _: fake.sentence())
    description = factory.LazyAttribute(lambda _: fake.paragraph())

class CardFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Card

    set = factory.SubFactory(SetFactory)
    front = factory.LazyAttribute(lambda _: fake.word())
    back = factory.LazyAttribute(lambda _: fake.word())
