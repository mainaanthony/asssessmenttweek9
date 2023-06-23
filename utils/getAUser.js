//make sure to create this in the utils folder
const mssql = require('mssql')
const config = require('../config')

async function getAUser(user_id){


    let sql = await mssql.connect(config)
    if(sql.connected){
    let results = await sql.request()
                        .input("MemberID",user_id)
                        .execute("dbo.get_member_by_ID")

    let user = results.recordset[0]

 return user

    }
}


module.exports = getAUser