const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

var naoEncontrado = {
  dataCompra: 'Usuário não encontrado!',
  pontos: '0'
}

var mockData=[
  {
      id:10,
      dataCompra: "05/11/2021",
      pontos: 1
  },
  {
      id:20,
      dataCompra: "10/11/2021",
      pontos: 1
  },
  {
      id:30,
      dataCompra: "14/11/2021",
      pontos: 1
  }
]

app.use(cors())
app.get('/compras/:id', (req, res) => {
  console.log(req.params.id)
  var idSolicitado = req.params.id
  var compraEncontrada = mockData.find(compra =>{
    return compra.id == idSolicitado
  })
  console.log(compraEncontrada)
  res.send(compraEncontrada ?? naoEncontrado) 

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
