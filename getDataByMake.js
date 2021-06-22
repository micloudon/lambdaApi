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
  let make = event['make']
 
  let results = await mysql.query(`SELECT * FROM restfulApi_car WHERE make='${make}'`)
 
  await mysql.end()
  
  // const response = {
  //   status: 200,
  //   headers: {
  //     "content-type": "text/html"
 
  //   },
  //   body: results
  // }
  
  
  return results
  
};