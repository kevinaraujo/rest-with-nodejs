const connection = require('../infra/connection')

class Attendance {
    add(attendance) {
        const sql = 'INSERT INTO Attendance SET ?'

        connection.query(sql, attendance, (error, result) => {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
            }
        })
    }
}

module.exports = new Attendance