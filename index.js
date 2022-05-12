const express = require('express')
const app = express()
const port 3000

app.get('/adimin',(req,res) => {
  res.send('<h1>pagina inicial</h1>')
})

app.listen(port ,() => console.info(`Servidor rodando na porta ${port}`))