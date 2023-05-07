from django.db import models


class CategoryKey(models.Model):
    key = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name = 'Категории'

    def __str__(self):
        return f'{self.name} ({self.key})'


class Pathname(models.Model):
    pathname = models.CharField(max_length=255)
    category = models.ForeignKey(CategoryKey, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.pathname} ({self.category.name})'


class MetaTeg(models.Model):
    pathname = models.OneToOneField(Pathname, on_delete=models.CASCADE, primary_key=True)


class MetaDescription(MetaTeg):
    text = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Мета теги type=description'

    def __str__(self):
        return f'Описание страницы {self.pathname}'


class MetaKeywords(MetaTeg):
    keywords = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Мета теги type=keywords'

    def __str__(self):
        return f'Ключевые слова страницы {self.pathname}'


class QuestionSchem(models.Model):
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    pathname = models.ForeignKey(Pathname, on_delete=models.CASCADE, null=False)

    class Meta:
        verbose_name = 'FAQ разметка'

    def __str__(self):
        return f'{self.question} - {self.pathname}'
