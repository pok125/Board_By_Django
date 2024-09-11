from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
    files = serializers.FileField(allow_null=True, required=False)

    class Meta:
        model = Post
        fields = '__all__'