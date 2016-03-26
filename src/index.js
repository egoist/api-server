import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', routes)

const port = app.get('APP_PORT') || 3000
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
