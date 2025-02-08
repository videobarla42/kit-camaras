import express from 'express';
import compression from 'compression';
import path from 'path';

const app = express();

// Habilitar compresión (Gzip)
app.use(compression());

// Habilitar Brotli (opcional)
// import shrinkRay from 'shrink-ray-current';
// app.use(shrinkRay());

// Servir la carpeta de compilación de Vite
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
