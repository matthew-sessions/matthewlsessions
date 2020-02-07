from flask import Flask, render_template, request,  url_for, redirect,jsonify
from flask_sitemap import Sitemap

def create_app():
    app = Flask(__name__, static_url_path='/apps/static')
    ext = Sitemap(app=app)

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

    @ext.register_generator
    def index():
        # Not needed if you set SITEMAP_INCLUDE_RULES_WITHOUT_PARAMS=True
        yield 'index', {}
        
    return(app)    