import logging
import os
from traceback import format_exception


from flask import Flask, Response, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
cors = CORS(app=app)

#
# Configure logger
#
app.logger.handlers.clear() #prevent double-logging with Flask logger
log_handler = logging.StreamHandler() # log to stdout/stderr
log_formatter = logging.Formatter(
    "%(asctime)s [%(name)-12s] %(levelname)-8s %(message)s"
)
log_handler.setFormatter(log_formatter)
log_handler.setLevel(logging.DEBUG) # This should allow all error messages to be displayed
app.logger.addHandler(log_handler)
# Use this logger for manual addition of log messages
logger = logging.getLogger("werkzeug")
logger.setLevel(logging.DEBUG)

def bad_request(message):
    """
    Return a 400 error with the given message a JSON.
    """
    response = jsonify({"error": message})
    response.status_code = 400
    return response

def server_error(message):
    """
    Return a 500 error with the given message as JSON.
    """
    response = jsonify({"error": message})
    response.status_code = 500
    return response

def bad_route(path):
    """
    Return a 404 error with the given path contained in the HTML.
    """
    response = f"""
    <!DOCTYPE HTML PUBLIC "-//W3C/DTD HTML 3.2 Final//EN">
    <title>404 Not Found</title>
    <h1>Not Found</h1>
    <p>The requested URL (path=/{path}) was not found on the server.
    If you entered the URL manually please check your spelling and try again.</p>
    """
    return Response(response, status=404, mimetype="text/html")

def log_tracebook(e):
    lines = format_exception(type(e), e, e.__traceback__)
    traceback = "".join(lines)
    logger.error(traceback)