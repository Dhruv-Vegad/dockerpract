FROM  python:3.11-slim

WORKDIR /dockerpract/djangoapp

COPY requirements.txt /dockerpract/djangoapp

COPY /djangoapp /demo_app

RUN pip install --upgrade pip setuptools wheel

RUN pip install -r requirements.txt

ENTRYPOINT [ "3.11-slim" ]
CMD [ "manage.py","runserver","0.0.70" ]
