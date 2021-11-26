module.exports = app => {
    app.get('/attendance', (req, res) => {
        res.send('Server running and get method!')
    })
}