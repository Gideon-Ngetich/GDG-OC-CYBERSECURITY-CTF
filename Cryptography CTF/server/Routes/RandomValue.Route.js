const router = require('express').Router()
const { Value } = require('../Models')

router.post('/', async (req, res) => {
    const { randomValue } = req.body;

    if (!randomValue) {
        return res.status(400).json({ error: 'No random value provided' });
    }

    try {
        const newRandomData = new Value({
            randomValue,
        });
        await newRandomData.save();
        res.json({ message: 'Random value saved to database', data: newRandomData });
    } catch (error) {
        console.error('Error saving random data:', error);
        res.status(500).json({ error: 'Error saving data to database' });
    }
});

module.exports = router