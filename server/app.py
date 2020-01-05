from flask import Flask, render_template, request
from service import identify
import logging

# Set logging level
logging.basicConfig(level=logging.INFO)

# Initialize the Flask application
app = Flask(__name__, static_folder='../frontend/dist/static', template_folder='../frontend/dist/templates')

@app.route('/', methods=['GET'])
def index():
  return render_template('index.html')

@app.route('/api/identify', methods=['POST'])
def api_identify():
    r = request
    return identify(r.data)
# start flask app
if __name__ == '__main__':
  app.run()
