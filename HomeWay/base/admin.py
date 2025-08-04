from django.contrib import admin
from .models import User, Hotel, Room, Clients, Employer, Reserve

# Register your models here.

admin.site.register(User)
admin.site.register(Hotel)
admin.site.register(Room)
admin.site.register(Clients)
admin.site.register(Employer)
admin.site.register(Reserve)
