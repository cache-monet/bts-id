from flask import Flask, request, Response, make_response
from helpers.facial_recognition.image import process
import cv2
import logging
import numpy as np

# Set logging level
logging.basicConfig(level=logging.INFO)

# Initialize the Flask application
app = Flask(__name__)

# route http posts to this method
@app.route('/api/identify', methods=['POST'])
def identify():
    r = request
    # convert string of image data to uint8 and decoded image into cv2 compatible form
    nparr = np.fromstring(r.data, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    # Identify members
    identified = process(img)
    # Return processed image
    retval, buffer = cv2.imencode('.png', identified)
    response = make_response(buffer.tobytes())
    response.headers['Content-Type'] = 'image/png'
    return response

# start flask app
app.run(host="0.0.0.0")
