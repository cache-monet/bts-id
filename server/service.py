from flask import Response, make_response
from helpers.facial_recognition.image import process
import cv2
import logging
import numpy as np

def identify(raw):
    # convert string of image data to uint8 and decoded image into cv2 compatible form
    nparr = np.fromstring(raw, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    # Identify members
    identified = process(img)
    # Return processed image
    retval, buffer = cv2.imencode('.png', identified)
    response = make_response(buffer.tobytes())
    response.headers['Content-Type'] = 'image/png'
    return response