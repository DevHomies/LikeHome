from rest_framework.serializers import ModelSerializer
from catalog.models import Reservation


class catalogSerializer(ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
