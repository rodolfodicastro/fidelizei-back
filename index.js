const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

var naoEncontrado = {
  dataCompra: 'Usuário não encontrado!',
  pontos: '0'
}

var mockData = [
  {
    id: 10,
    dataCompra: "05/11/2021",
    pontos: 1
  },
  {
    id: 20,
    dataCompra: "10/11/2021",
    pontos: 1
  },
  {
    id: 30,
    dataCompra: "14/11/2021",
    pontos: 1
  }
]

app.use(cors())
app.use(express.json())
app.get('/compras/:id', (req, res) => {
  console.log(req.params.id)
  var idSolicitado = req.params.id
  var compraEncontrada = mockData.find(compra => {
    return compra.id == idSolicitado
  })
  console.log(compraEncontrada)
  res.send(compraEncontrada ?? naoEncontrado)

})

app.post('/compras', (req, res) => {
  console.log(req.body)
  var telefone = req.body.telefone



  var tomanhoDaMinhaLista = mockData.length
  for (interator = 0; tomanhoDaMinhaLista > interator; interator = interator + 1) {

    var compraAtual = mockData[interator]
    if (compraAtual.id == telefone) {
      compraAtual.pontos = compraAtual.pontos + 1
      res.send("Incluido com Sucesso")
      return
    }
  }


  var dataAtual = new Date()
  var dataAtualFormatada = dataAtual.getDate() + "/" + (dataAtual.getMonth() + 1) + "/" + dataAtual.getFullYear()
  var compraAtual = {
    id: telefone,
    dataCompra: dataAtualFormatada,
    pontos: 1
  }

  mockData.push(compraAtual)
  res.send("Incluido com Sucesso")
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
