import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

app.post('/hit', async (req, res) => {
    try {
        res.cookie('cred', res.body, { credential: true, httpOnly: true }).send({ success: true })
    } catch (error) {
        res.send({ success: false })
    }
})

app.get('/', async (req, res) => {
    try {
        res.send({ success: true })
    } catch (error) {
        res.send({ success: false })
    }
})

app.listen(8080, () => {
    console.log('server is runing!')
})