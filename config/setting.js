// module.exports ={
//     mongoURL:"mongodb://localhost:27017/refixd",
//     secret:'this is the secret'
// }

if(process.env.NODE_ENV == 'production'){
    module.exports = require('./key_prod')
}else{
    module.exports = require('./key_dev')
}