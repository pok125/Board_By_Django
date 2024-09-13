from rest_frameworks import serializers
from .models import MyUser

class CreateUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyUser
        fields = '__all__'

        def create(self, validated_data):
            user = MyUser.objects.create_user(**validated_data)

            return user