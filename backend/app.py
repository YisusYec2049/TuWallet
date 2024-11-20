from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from config import Config

app = Flask(__name__)

app.config.from_object(Config)

db = SQLAlchemy(app)

@app.route("/")
def index():
    return "¡Backend funcionando correctamente!"

if __name__ == "__main__":
    try:
        with app.app_context():
            with db.engine.connect() as connection:
                result = connection.execute(text("SELECT 1")).fetchone()
                print(f"Resultado de la prueba de conexión: {result}")
        print("¡Conexión exitosa a la base de datos!")
    except Exception as e:
        print(f"Error al conectar con la base de datos: {e}")
    
    app.run(debug=True)
