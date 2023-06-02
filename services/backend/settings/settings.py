from datetime import timedelta
from pathlib import Path
import environ

env = environ.Env()
environ.Env.read_env('.env')

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = env("SECRET_KEY")
DEBUG = True
ALLOWED_HOSTS = ['127.0.0.1', 'api.kibtop.com', '94.250.251.138', 'backend']
BASE_URL = env("URL")

INSTALLED_APPS = [
    'channels',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    # 'channels',
    'rest_framework',
    # 'channels_redis',
    'rest_framework.authtoken',
    'drf_multiple_model',
    'django_filters',
    'modeltranslation',

    'django.contrib.sites',
    'djoser',
    'drf_yasg',
    'accounts.apps.AccountsConfig',
    'sections.apps.SectionsConfig',
    'seo.apps.SeoConfig',
    'chat.apps.ChatConfig',
]



SITE_ID = 1

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django_graylog.GraylogMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CSRF_TRUSTED_ORIGINS = [
    'https://api.kibtop.com',
    'http://94.250.251.138:8000'
]

CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://kibtop.com',
]

ROOT_URLCONF = 'settings.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'settings.wsgi.application'
ASGI_APPLICATION = 'settings.asgi.application'

CHANNEL_LAYERS = {
    "default": {
        # "BACKEND": "channels_redis.core.RedisChannelLayer",
        "BACKEND": "channels.layers.InMemoryChannelLayer",

        # "CONFIG": {
        #     "hosts": [env("REDIS_URL")],
        # },
    },
}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': env("POSTGRES_DB"),
#         'USER': env("POSTGRES_USER"),
#         'PASSWORD': env("POSTGRES_PASSWORD"),
#         'HOST': env("POSTGRES_HOST"),
#         'PORT': env("POSTGRES_PORT")
#     }
# }

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

LANGUAGES = (
    ('ru', 'Russian'),
    ('en', 'English'),
    ('tr', 'Türk'),
)

MODELTRANSLATION_DEFAULT_LANGUAGE = 'en'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = "accounts.CustomUser"
AUTHENTICATION_BACKENDS = ('accounts.backends.AuthBackend',)

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',

    ),
    'DEFAULT_FILTER_BACKEND': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
}

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('Bearer',),
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=20),
    'REFRESH_TOKEN_LIFETIME': timedelta(weeks=4),
}

DJOSER = {
    'USER_CREATE_PASSWORD_RETYPE': True,
    'SEND_ACTIVATION_EMAIL': True,
    'SET_PASSWORD_RETYPE': True,
    'PASSWORD_RESET_CONFIRM_RETYPE': True,
    'TOKEN_MODEL': None,
    'ACTIVATION_URL': 'auth/confirm/{uid}/{token}/',
    'PASSWORD_RESET_CONFIRM_URL': '/auth/recovery/{uid}/{token}',
    'HIDE_USERS': True,
    'PERMISSIONS': {
        'user': ['rest_framework.permissions.AllowAny'],
    },
    'SERIALIZERS': {
        "user_create": 'accounts.serializer.UserRegistrationSerializer',
        "user": 'accounts.serializer.UserAPISerializer',
        'user_create_password_retype': 'accounts.serializer.UserAPICreatePasswordRetypeSerializer',
        'current_user': 'accounts.serializer.UserAPISerializer',
    }
}

# EMAIL
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = env("EMAIL_HOST")
EMAIL_PORT = env("EMAIL_PORT")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True
DEFAULT_FROM_EMAIL = env("EMAIL_HOST_USER")
SERVER_EMAIL = env("EMAIL_HOST_USER")

#
# GRAYLOG_ENDPOINT = 'http://graylog:12201/gelf'
#
# LOGGING = {
#     'version': 1,
#     'disable_existing_loggers': False,
#     'handlers': {
#         'gelf': {
#             'class': 'graypy.GELFUDPHandler',
#             'host': 'graylog',
#             'port': 12201,
#         },
#     },
#     'loggers': {
#         'custom_gy_logger': {
#             'handlers': ['gelf'],
#             'level': 'DEBUG',
#             'propagate': True,
#         }
#     }
# }
