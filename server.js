const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());
// Servir el HTML
app.use(express.static(__dirname));

// Ruta para guardar los nombres
app.post("/guardar", (req, res) => {
  const nombre = req.body.nombre;
  const fecha = new Date().toLocaleString();
  const linea = `${nombre} - ${fecha}\n`;
  const archivo = path.join(__dirname, "Nombres.txt");

  fs.appendFile(archivo, linea, (err) => {
    if (err) {
      console.error("Error al guardar:", err);
      res.status(500).send("Hubo un error al guardar el nombre.");
    } else {
      res.send("¡Nombre guardado con éxito!");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
