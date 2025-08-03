FROM  python:3.11-slim

WORKDIR /dockerpract/djangoapp

COPY requirements.txt .

COPY . .

RUN pip install --upgrade pip setuptools wheel

RUN pip install -r requirements.txt

CMD [ "python","manage.py","runserver","0.0.0.0.70" ]