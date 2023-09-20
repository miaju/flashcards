from django.core.management.base import BaseCommand
from api_app.factories import UserFactory, SetFactory, CardFactory
import random

class Command(BaseCommand):
    help = 'Seed initial data for the API'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Seeding data...'))

        num_users = 10  # Adjust the number of users as needed

        for _ in range(num_users):
            user = UserFactory()
            num_sets = random.randint(1, 3)  # Generates 1 to 3 sets per user
            for _ in range(num_sets):
                set = SetFactory(user=user)
                num_cards = random.randint(1, 5)  # Generates 1 to 5 cards per set
                for _ in range(num_cards):
                    CardFactory(set=set)

        self.stdout.write(self.style.SUCCESS('Data seeded successfully.'))
