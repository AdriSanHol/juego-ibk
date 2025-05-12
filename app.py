from flask import Flask, render_template

app = Flask(__name__)

# Definir la función zip
def zip_function(list1, list2):
    return zip(list1, list2)

# Registrar la función con Jinja2
app.jinja_env.globals.update(zip=zip_function)

@app.route('/')
def index():
    posiciones_iniciales = ['Pos1', 'Pos2', 'Pos3', 'Pos4', 'Pos5', 'Pos6', 'Pos7', 'Pos8']
    return render_template('index.html', posiciones_iniciales=posiciones_iniciales)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)