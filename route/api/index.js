const route=require('express').Router()

route.use('/user',require('./user'))
route.use('/products',require('./Product'))

exports=module.exports={
    route
}