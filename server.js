const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir os arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Para todas as rotas, retorna o index.html (útil para PWAs com rotas client-side)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
