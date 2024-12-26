const router = require('express').Router()
const { Flag } = require('../Models')

router.post('/', async (req, res) => {
    try {
        const { challengeId, flag } = req.body
        console.log({challengeId, flag})

        const challenge = await Flag.findOne({ challengeId: challengeId })

        if(flag === challenge.flag) {
            res.status(200).json({message: 'Flag Correct'})
        } else {
            res.status(400).json({message: 'Flag Incorrect'})
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json('Server error')
    }
})

module.exports = router