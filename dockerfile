FROM  python:latest

WORKDIR /DockerPract

COPY . .

RUN pip install -r requirement.txt

CMD ["python","dockerpract.py"]