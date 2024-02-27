from typing import Any, Dict  # noqa: F401

JAZZMIN_SETTINGS = {
    # title of the window (Will default to current_admin_site.site_title if absent or None)
    "site_title": "Kibtop Title",
    # Title on the login screen (19 chars max) (defaults to current_admin_site.site_header if absent or None)
    "site_header": "Kibtop Header",
    # Title on the brand (19 chars max) (defaults to current_admin_site.site_header if absent or None)
    "site_brand": "Kibtop Brand",
    "site_title": "Kibtop",
    # Title on the login screen (19 chars max) (defaults to current_admin_site.site_header if absent or None)
    "site_header": "Kibtop",
    # Title on the brand (19 chars max) (defaults to current_admin_site.site_header if absent or None)
    "site_brand": "Kibtop",
    # Logo to use for your site, must be present in static files, used for brand on top left
    # "site_logo": "logos/admin_logo_big.png",
    # Logo to use for your site, must be present in static files, used for login form logo (defaults to site_logo)
    # "login_logo": "logos/admin_logo_big.png",
    # Logo to use for login form in dark themes (defaults to login_logo)
    # "login_logo_dark": 'img/kia_logo.png',
    # CSS classes that are applied to the logo above
    "site_logo_classes": "img-square",
    # Relative path to a favicon for your site, will default to site_logo if absent (ideally 32x32 px)
    "site_icon": "logos/admin_logo.png",
    # Welcome text on the login screen
    "welcome_sign": "Kibtop Welcome",
    # Copyright on the footer
    "copyright": "Kibtop copyright",
    # List of model admins to search from the search bar, search bar omitted if excluded.
    # If you want to use a single search field you don't need to use a list, you can use a simple string
    # translate 30's line in uzbek
    

    # Field name on user model that contains avatar ImageField/URLField/Char_field or a callable that receives the user
    "user_avatar": None,
    ############
    # Top Menu #
    ############
    # Links to put along the top menu
    "topmenu_links": [
        # Url that gets reversed (Permissions can be added)
        {"name": "Home", "url": "admin:index", "permissions": ["auth.view_user"]},
        {"name": "Sites", "url": "/admin/sites/site/", "permissions": ["auth.view_user"]},


        # model admin to link to (Permissions checked against model)
        {"model": "accounts.CustomUser"},
        # App with dropdown menu to all its models pages (Permissions checked against models)
        {"app": "accounts"},
        # App with dropdown menu to all its models pages (Permissions checked against models)
        
    ],
    #############
    # User Menu #
    #############
    # Additional links to include in the user menu on the top right ("app" url type is not allowed)
    "usermenu_links": [
        {"name": "Support", "url": "https://github.com/farridav/django-jazzmin/issues", "new_window": True},
        {"model": "accounts.CustomUser"},
    ],
    #############
    # Side Menu #
    #############
    # Whether to display the side menu
    "show_sidebar": True,
    # Whether to aut expand the menu
    "navigation_expanded": False,
    # Hide these apps when generating side menu e.g (auth)
    "hide_apps": [],
    # Hide these models when generating side menu (e.g auth.user)
    "hide_models": [],
    # List of apps (and/or models) to base side menu ordering off of (does not need to contain all apps/models)
    # "order_with_respect_to": ["auth", "books", "books.author", "books.book"],
    # Custom links to append to app groups, keyed on app name
    "custom_links": {
        "books": [
            {
                "name": "Make Messages",
                "url": "make_messages",
                "icon": "fas fa-comments",
                "permissions": ["books.view_book"],
            }
        ]
    },
    # Custom icons for side menu apps/models See
    # https://fontawesome.com/icons?d=gallery&m=free&v=5.0.0,5.0.1,5.0.10,5.0.11,5.0.12,5.0.13,5.0.2,5.0.3,5.0.4,5.0.5,5.0.6,5.0.7,5.0.8,5.0.9,5.1.0,5.1.1,5.2.0,5.3.0,5.3.1,5.4.0,5.4.1,5.4.2,5.13.0,5.12.0,5.11.2,5.11.1,5.10.0,5.9.0,5.8.2,5.8.1,5.7.2,5.7.1,5.7.0,5.6.3,5.5.0,5.4.2
    # for the full list of 5.13.0 free icon classes
    "icons": {
        "accounts": "fas fa-user",
        "accounts.user": "fas fa-user",
        "accounts.Group": "fas fa-account",
        # account app icons
        "accounts": "fas fa-user",
        "accounts.CustomUser": "fas fa-user",
        # common app icons
        "chat": "fas fa-comments",
        "seo": "fas fa-search",
        "seo.QuestionSchem": "fas fa-question-circle",
        "seo.CategoryKey": "fas fa-folder",
        "sites": "fas fa-globe",
        "sections": "fas fa-list",
        "authtoken": "fas fa-key",
        "authtoken.Token": "fas fa-key",
        
    },
    # Icons that are used when one is not manually specified
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    #################
    # Related Modal #
    #################
    # Use modals instead of popups
    "related_modal_active": False,
    #############
    # UI Tweaks #
    #############
    # Relative paths to custom CSS/JS scripts (must be present in static files)
    "custom_css": "css/main.css",
    "custom_js": "js/custom_jazzmin.js",
    # Whether to show the UI customizer on the sidebar
    # "show_ui_builder": True,
    ###############
    # Change view #
    ###############
    # Render out the change view as a single form, or in tabs, current options are
    # - single
    # - horizontal_tabs (default)
    # - vertical_tabs
    # - collapsible
    # - carousel
    "changeform_format": "horizontal_tabs",
    # override change forms on a per modeladmin basis
    "changeform_format_overrides": {
        "accounts.user": "collapsible",
    },
    # Add a language dropdown into the admin
    "language_chooser": False,
}  # type: Dict[str, Any]

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": True,
    "brand_colour": False,
    "accent": "accent-primary",
    "navbar": "navbar-white navbar-light",
    "no_navbar_border": False,
    "navbar_fixed": False,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": False,
    "sidebar": "sidebar-dark-primary",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": True,
    "sidebar_nav_flat_style": True,
    "theme": "litera",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-outline-primary",
        "secondary": "btn-outline-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success",
    },
}  # type: Dict[str, Any]