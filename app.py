from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def slash():
    return render_template("accueil.html")

@app.route("/index")
def index():
    return render_template("accueil.html")

@app.route("/accueil")
def accueil():
    return render_template("accueil.html")

@app.route("/formulaire")
def formulaire():
    return render_template("formulaire.html")

@app.route("/tableau")
def tableau():
    return render_template("tableau.html")

if __name__ == "__main__":
    app.run(debug=True)
