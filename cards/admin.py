from django.contrib import admin

from .models import Card, Subject


class CardAdmin(admin.ModelAdmin):
    list_display = ('question', 'subject')
    list_editable = ['subject']

    search_fields = ['question', 'answer']
    list_filter = ['subject']


admin.site.register(Card, CardAdmin)
admin.site.register(Subject)
