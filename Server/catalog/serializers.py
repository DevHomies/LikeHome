from rest_framework.serializers import ModelSerializer
from catalog.models import Reservation, Hotel


class catalogSerializer(ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'
