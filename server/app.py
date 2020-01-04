from flask import Flask, render_template, request
from service import identify
import logging

# Set logging level
logging.basicConfig(level=logging.INFO)

# Initialize the Flask application
# app = Flask(__name__, static_folder='../static/dist', template_folder='../static')
app = Flask(__name__, static_folder='../frontend/static', template_folder='../frontend/templates')

@app.route('/', methods=['GET'])
def get_index():
  return render_template('index.html')

@app.route('/identify', methods=['POST'])
def post_identify():
    r = request
    return identify(r.data)

# start flask app
if __name__ == '__main__':
  app.run()
