FROM python:3.7

MAINTAINER Remi "remiaston@gmail.com"

RUN apt-get update && apt-get install -y python-dev python-pip cmake 

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

# COPY . /app
COPY ./app /app

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]
