const Attendance = require('../models/attendance')

module.exports = app => {
    app.get('/attendance', (req, res) => {
        Attendance.list(res)
    })

    app.get('/attendance/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Attendance.getById(id, res)
    })

    app.post('/attendance', (req, res) => {
        const attendance = req.body

        Attendance.add(attendance, res)
    })
}