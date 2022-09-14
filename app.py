from flask import Flask, render_template, abort, redirect, url_for, request,make_response
from flask import session

app = Flask(__name__, static_folder="./static")

@app.route('/')
@app.route('/index')
@app.route('/index.html')
@app.route('/success/index.html')
def index():
  return render_template("index.html")

@app.route('/tin_tuc')
@app.route('/tin_tuc.html')
@app.route('/success/tin_tuc.html')
def tin_tuc():
    return render_template("tin_tuc.html")

@app.route('/tiem_chung')
@app.route('/tiem_chung.html')
@app.route('/success/tiem_chung.html')
def tiem_chung():
  return render_template("tiem_chung.html")


@app.route('/country', methods=['GET', 'POST'])
def country():
  if request.method == 'POST':
        country = request.form['country']
        return redirect(url_for('success', country=country))
  else:
        country = request.args.get('country')
        return redirect(url_for('success', country=country))

@app.route('/success/<country>')
def success(country):
    return render_template("index.html", country=country)


@app.errorhandler(404)
def page_not_found(error):
   return render_template('error.html'), 404

if __name__ == "__main__":
  app.run(port = 5050)
