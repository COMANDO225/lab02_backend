import Express from 'express'
import cors from 'cors'
import db from './database/db.js'
import dotenv from 'dotenv'
import agendaRutas from './routes/agendaRoutes.js'
import userRutas from './routes/userRoutes.js'
// import UserModel from './models/UserModel'

// Empieza lo elegante
const app = Express()
dotenv.config()
const PORT = process.env.PORT || 8000

app.use(Express.json())
app.use(cors())
app.use('/agenda', agendaRutas)
app.use('/user', userRutas)

try {
    await db.authenticate()
    console.log("Base de datos conectada")
    // creara la tabla si no existe
    // await UserModel.sync()
} catch (error) {
    console.log(`Error al conectar la base de datos: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})