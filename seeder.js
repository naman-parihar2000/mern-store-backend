const mongoose = require('mongoose')
const users = require('./data/users.js')
const products = require('./data/products.js')

const USER = require('./models/userModel.js')
const PRODUCT = require('./models/productModel.js')
const ORDER = require('./models/orderModel.js')


const importData = async () => {
    try {

        await mongoose.connect(`mongodb+srv://dbUser:JSV91xZrTcAnYhFb@cluster0.jgnpcln.mongodb.net/natours?retryWrites=true&w=majority`)

        await ORDER.deleteMany();
        await USER.deleteMany();
        await PRODUCT.deleteMany();

        const createdUsers = await USER.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = await products.map((product) => {
            return { ...product, user: adminUser }
        })

        await PRODUCT.insertMany(sampleProducts)

        console.log("DATA IMPORTED");

        process.exit();
    }
    catch (error) {
        console.log(error);
        process.exit(0)
    }
}

// const destroyData = async () => {
//     try {
//         await ORDER.deleteMany();
//         await USER.deleteMany();
//         await PRODUCT.deleteMany();

//         console.log("DATA DESTROYED");
//         process.exit();
//     } catch (error) {
//         console.log(`${error}`);
//         process.exit(1)
//     }
// }

importData()