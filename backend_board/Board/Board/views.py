from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from posts.models import Post
from posts.serializers import PostSerializer


class HomeView(APIView):

    def get(self, request):
        posts = Post.objects.all()
        serialized_posts = [PostSerializer(post) for post in posts]

        return Response(serialized_posts, status=status.HTTP_200_OK)