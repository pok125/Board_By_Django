from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=50)
    desc = models.TextField()
    files = models.FileField(null=True, blank=True)
    views = models.IntegerField(default=0, null=False, verbose_name='조회수')
    created_at = models.DateField(auto_now_add=True, verbose_name='등록일')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='수정일')