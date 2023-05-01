import {db} from '../db/index'

export function get(req:any, res:any){
    let sql = 'select * from user'
    db.query(sql, (err:any, data:any)=>{
        if (err){
            return res.send("ERROR" + err.message)
        }
        res.send(data)
    })
}

export function test(){
    let sql = 'select * from user'
    db.query(sql, (err:any, data:any)=>{
        if (err){
            console.error("select fail")
        }
        console.log("db data: ", data)
    })
}
