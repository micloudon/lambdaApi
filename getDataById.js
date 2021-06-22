var config = require('./config.json');
const mysql = require('serverless-mysql')({
  config: {
    host     : config.host,
    database : config.database,
    user     : config.user,
    password : config.password
  }
})

    
exports.handler = async (event) => {
  // console.log(event)
  // let make = 'Acura'
  let id = event['id']
 
  let results = await mysql.query(`SELECT * FROM restfulApi_car WHERE id='${id}'`)
 
  await mysql.end()
  
  
  return results[0]
  
};