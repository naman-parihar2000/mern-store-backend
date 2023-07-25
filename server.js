const mongoose = require('mongoose')
const DB = `mongodb+srv://dbUser:JSV91xZrTcAnYhFb@cluster0.jgnpcln.mongodb.net/natours?retryWrites=true&w=majority`

const connectAndListen = (app) => {
    try {
        mongoose.connect(DB)
        console.log("CONNECTED TO DATABASE");
        app.listen(5000, () => {
            console.log("CONNECTED ON PORT 5000")
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connectAndListen }