from django.core.management.base import BaseCommand
from api_app.models import User, Set, Card

class Command(BaseCommand):
    help = 'Seed initial data for the API'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Seeding data...'))

        # Create users
        User.objects.create(email='mia@email.com', username='miaju', password='miaju')
        User.objects.create(email='user1@example.com', username='user1', password='password1')
        User.objects.create(email='user2@example.com', username='user2', password='password2')

        # Create sets
        Set.objects.create(user_id=1, title='Set 1', description='Description 1')
        Set.objects.create(user_id=1, title='Set 2', description='Description 2')
        Set.objects.create(user_id=2, title='Set 3', description='Description 3')

        # Create cards
        Card.objects.create(set_id=1, front='Front 1', back='Back 1')
        Card.objects.create(set_id=1, front='Front 2', back='Back 2')
        Card.objects.create(set_id=1, front='Front 3', back='Back 3')
        
        self.stdout.write(self.style.SUCCESS('Data seeded successfully.'))
