FROM  python:3.11-slim

WORKDIR /dockerpract/djangoapp

COPY requirements.txt .

COPY . .

RUN pip install --upgrade pip setuptools wheel

RUN pip install -r requirements.txt

EXPOSE 8000

CMD [ "python","manage.py","runserver","0.0.0.0:8000" ]