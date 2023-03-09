const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())

const reader = require('xlsx')
const file = reader.readFile('exemple.xlsx')
  
let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}
  
app.get('/data', function (req, res) {
  
        res.send(data)
   })
   
app.listen(3000)