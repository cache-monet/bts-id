FROM python:3.7

MAINTAINER Remi "remiaston@gmail.com"

RUN apt-get update && apt-get install -y python-dev python-pip cmake 

# We copy just the requirements.txt first to leverage Docker cache
COPY server/requirements.txt app/server/requirements.txt

WORKDIR /app

RUN pip install -r server/requirements.txt

COPY ./server server

COPY ./frontend frontend

ENTRYPOINT [ "python" ]

CMD ["server/app.py"]
