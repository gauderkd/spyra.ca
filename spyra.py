from flask import Flask, render_template
from flask_admin import Admin

app = Flask(__name__)

admin = Admin(app, name="CVPanel", template_mode='bootstrap3')

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/cv')
def cv():
    return render_template("cv.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0')