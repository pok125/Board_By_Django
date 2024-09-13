from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


# Create your models here.
class MyUserManager(BaseUserManager):
    def create_user(self, email, nickname, password):
        if not email:
            raise ValueError("Users must have an email address")
        
        user = self.model(
            email=self.normalize_email(email),
            nickname=nickname
        )

        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_superuser(self, email, nickname, password):
        user = self.create_user(email, nickname=nickname, password=password)
        user.is_admin = True
        user.save(self._db)
        
        return user

class MyUser(AbstractBaseUser):
    email = models.EmailField(unique=True, 
                              verbose_name='email address', 
                              max_length=50)
    nickname = models.CharField(max_length=20)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    objects = MyUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = "nickname"

    def __str__(self):
        return self.email

