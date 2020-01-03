from __future__ import print_function
import cv2
import json
import numpy as np
import requests

host = 'http://localhost:5000'
test_url = host + '/api/identify'

def post_image(img_file):
  content_type = 'image/jpeg'
  headers = {'content-type': content_type}
  """ post image and return the response """
  img = open(img_file, 'rb').read()
  response = requests.post(test_url, data=img, headers=headers)
  # convert string of image data to uint8 and decode
  nparr = np.fromstring(response.content, np.uint8)
  img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
  # Display result
  cv2.imshow('Image', img)
  cv2.waitKey(0)

post_image('example/test.jpg')
