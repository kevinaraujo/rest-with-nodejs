class Tables {

    init(connection) {
        this.connection = connection
        this.createAttendanceTable()
    }

    createAttendanceTable() {
        const sql = `CREATE TABLE IF NOT EXISTS Attendance (
            id int NOT NULL AUTO_INCREMENT, 
            client varchar(50) NOT NULL, 
            pet varchar(20), 
            service varchar(20) NOT NULL, 
            status varchar(20) NOT NULL,
            description text,
            PRIMARY KEY(id)
        )`

        this.connection.query(sql, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Attendance table created successfully')
            }
        })
    }
}

module.exports = new Tables