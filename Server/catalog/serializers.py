from rest_framework.serializers import ModelSerializer
from catalog.models import Reservation,Hotel, Reward, User


class catalogSerializer(ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'
        
class searchSerializer(ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'
        
class reserveSerializer(ModelSerializer):
    class Meta:
        model = Reservation 
        fields = '__all__'
        
class rewardSerializer(ModelSerializer):
    class Meta:
        model = Reward 
        fields = '__all__'

class userSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
