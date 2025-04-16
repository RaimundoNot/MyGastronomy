import express from 'express'
import cors from 'cors'

async function main (){
    const hostname = 'localhost'
    const port = 2000

    const app = express()

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send({
            succes: true,
            statusCode: 200,
            body: 'Welcome to MyGastronomy!'
        })
    })

    app.listen(port, () => {
        console.log(`Server running on: https://${hostname}:${port}`)
    })
}

main()