const router = require('express').Router()
const { Flag } = require('../Models')

router.post('/', async (req, res) => {
    try{
        const { challengeId, flag } = req.body

        await new Flag({
            challengeId,
            flag
        }).save()

        res.status(201).json('Flag added successfully')
    } catch (error){
        console.error(error)
        res.status(500).json('Server error')
    }
})

module.exports = router