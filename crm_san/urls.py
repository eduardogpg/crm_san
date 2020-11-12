from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from .views import index

from .views import donantes
from .views import donaciones
from .views import circulos
from .views import administracion
from .views import alianzas

urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    
    path('donantes/', donantes, name='donantes'),
    path('donaciones/', donaciones, name='donaciones'),
    path('circulos/', circulos, name='circulos'),
    path('administracion/', administracion, name='administracion'),
    path('alianzas/', alianzas, name='alianzas'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
