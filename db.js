const Sequilize = require('sequelize')

const db= new Sequilize('shopdb','shopper','shoppass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min :0,
        max:5,
    }
})

const User=db.define('user',{
    id:{
         type : Sequilize.INTEGER,
         autoIncrement :true,
         primaryKey : true,
    },
    name:{
        type :Sequilize.STRING,
        allowNull :false,
    }
})

const Product=db.define('products',{
    id:{
        type : Sequilize.INTEGER,
        autoIncrement :true,
        primaryKey : true,
   },
   name:{
       type :Sequilize.STRING,
       allowNull :false,
   },
  manufacturer: Sequilize.STRING,
    price:{
        type: Sequilize.FLOAT,
        allowNull:false,
        defaultValue : 0.0,
    }  
})

db.sync()
  .then(()=>{
    console.log("Database is synced")
  })
  .catch(()=>{console.error("Error creating Database")})
exports=module.exports={
    User,Product
}