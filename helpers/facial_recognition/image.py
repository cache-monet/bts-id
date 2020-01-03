from helpers.facial_recognition.recognize import recognize, draw
import cv2
import logging
import os
import pickle

def process(image, detection='hog', tolerance=0.45):
  names = []
  encodings = os.path.dirname(os.path.realpath(__file__)) + '/encodings.pickle'
  encodings = pickle.loads(open(encodings, 'rb').read())
  boxes = recognize(image, names, encodings, detection, tolerance)
  draw(image, boxes, names)
  return image