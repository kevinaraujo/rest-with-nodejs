const Attendance = require('../models/attendance')

module.exports = app => {
    app.get('/attendance', (req, res) => {
        res.send('Server running and get method!')
    })

    app.post('/attendance', (req, res) => {
        const attendance = req.body

        Attendance.add(attendance, res)
    })
}