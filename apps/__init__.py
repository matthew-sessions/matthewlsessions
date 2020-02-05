from flask import Flask, render_template, request,  url_for, redirect,jsonify


def create_app():
    app = Flask(__name__, static_url_path='/apps/static')

    @app.route('/')
    def index():
        return render_template('home.html')

    @app.route('/home')
    def home():
        return render_template('home.html')

    @app.route('/ip')
    def ip():
        return(jsonify(request.remote_addr))

    @app.route('/ip2')
    def ip2():
        if request.environ.get('HTTP_X_FORWARDED_FOR') is None:
            ip = request.environ['REMOTE_ADDR']
        else:
            ip = request.environ['HTTP_X_FORWARDED_FOR']
        return(jsonify(ip))

    @app.route('/resume')
    def resume():
        return render_template('resume.html')

    return(app)    