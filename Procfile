release: python manage.py migrate --no-input
web: uwsgi saleor/wsgi/uwsgi.ini
node: saleor-analytics/index.js
celeryworker: celery worker -A saleor.celeryconf:app --loglevel=info -E
