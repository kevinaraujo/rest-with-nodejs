const moment = require('moment')
const connection = require('../infra/connection')

class Attendance {
    add(attendance, res) {

        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const created_at = moment().format('YYYY-MM-DD HH:MM:SS')
        
        const dateIsValid = moment(date).isSameOrAfter(created_at)
        const clientIsValid = attendance.client.length >= 5

        const validations = [
            { 
                name: 'date',
                valid: dateIsValid,
                message: 'Date should be greater or equal to current date.'
            },
            { 
                name: 'client',
                valid: clientIsValid,
                message: 'Client must have at least 5 characters.'
            }
        ]

        const errors = validations.filter(field => !field.valid)

        const newAttendanceData = { ...attendance, date, created_at }
        const existErrors = errors.length

        if (existErrors) {
            return res.status(400).json(errors)
        }
        
        const sql = 'INSERT INTO Attendance SET ?'

        connection.query(sql, newAttendanceData, (error, result) => {
            if (error) {
                return res.status(400).json(error)
            } 
            
            return res.status(201).json(result)
            
        })
    }
}

module.exports = new Attendance