const Attendance = require('../models/attendance')

module.exports = app => {
    app.get('/attendances', (req, res) => {
        Attendance.list(res)
    })

    app.get('/attendances/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Attendance.getById(id, res)
    })

    app.post('/attendances', (req, res) => {
        const attendance = req.body

        Attendance.add(attendance, res)
    })

    app.patch('/attendances/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const data = req.body

        Attendance.update(id, data, res)
    })
}