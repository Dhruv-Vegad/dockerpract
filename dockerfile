FROM  python:3.11-slim

WORKDIR /DockerPract

COPY . .

RUN pip install --upgrade pip setuptools wheel

RUN pip install -r requirements.txt

CMD ["python","dockerpract.py"]