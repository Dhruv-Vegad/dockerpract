FROM  python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /dockerpract/djangoapp

COPY requirements.txt .

COPY . .

RUN pip install --upgrade pip setuptools wheel

RUN pip install -r requirements.txt

# RUN python manage.py migrate

EXPOSE 8000

CMD [ "python","manage.py","runserver","0.0.0.0:8000" ]