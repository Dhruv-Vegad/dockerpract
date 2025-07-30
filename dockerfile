FROM  python:latest

WORKDIR /DockerPract

COPY . .

RUN pip install -r requirements.txt

CMD ["python","dockerpract.py"]