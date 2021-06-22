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
  let model = event['model']
  let year = event['year']
 
  let results = await mysql.query(`SELECT * FROM restfulApi_car WHERE make='${make}' AND model='${model}' AND year=${year}`)
 
  await mysql.end()

  
  return results
  
};