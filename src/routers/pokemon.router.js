import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('list', { title: 'Lista de Pokemones' })
})

router.get('/:name', (req, res) => {
    const name = req.params.name
    res.send(`Mostrando el pokemon de nombre ${name}`)
})

router.post('/', (req, res) => {
    res.send('Creando el pokemon')
})

export default router