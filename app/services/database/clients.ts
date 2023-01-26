import { Tclient } from "../types/client";
import db from "./";

function createTableClients() : Promise<string>{
    try{
        return new Promise((resolve => {
            db.transaction((transaction)=>{
                transaction.executeSql(
                    `CREATE TABLE IF NOT EXISTS Clients(
                        id INTEGER primary key autoincrement, 
                        name TEXT,
                        cpf TEXT,
                        age TEXT,
                        cell TEXT,
                        telephone TEXT,
                        email TEXT,
                        height FLOAT,
                        weight FLOAT,
                        objective TEXT,
                        gender TEXT,
                        observation TEXT,         
                        situation TEXT DEFAULT 'Active',
                        dateRegister TEXT);`
                ), () => { 
                    resolve("table clients create  successfully!"
                    )}
            })

        }))
    }
    catch(exception){
        console.log(exception)
    }
}

async function insertClient(client: Tclient) : Promise<string>{
    try{ 
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql(
                    `INSERT INTO Clients (name, cpf, age, cell, telephone, email, 
                    height, weight, objective, gender, 
                    observation, dateRegister) 
                    VALUES (?,?,?,?,?,?,?,?,?,?,?,?);`, 
                  [ client.name, client.cpf, client.age, client.cell, client.telephone,
                    client.email, client.height ,client.weight,client.objective, client.gender,
                    client.observation, client.dateRegister],
                    ()=>{
                        resolve("client added successfully!") 
                    })
                })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function updateClient(client: Tclient) : Promise<string>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql(`UPDATE Clients SET name=?, cpf=?,age=?,cell=?,telephone=?,
                email=?,height=?,weight=?,objective=?, gender=?,observation=?,situation=? WHERE id = ?;`, 
                [   client.name, client.cpf, client.age, client.cell, client.telephone,
                    client.email, client.height ,client.weight,client.objective, client.gender,
                    client.observation, client.situation,client.id ],()=>{
                    resolve("client update successfully!") 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function returnAllClients() : Promise<Tclient[]>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("SELECT * FROM Clients;", [],(transaction,results)=>{
                    resolve(results.rows._array) 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function returnClientById(id: number) : Promise<Tclient>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("SELECT * FROM Clients WHERE id = ?;", [id],(transaction,results)=>{
                    resolve(results.rows.item(0)) 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function deleteClientById(id:number) : Promise<string>{{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("DELETE FROM Clients WHERE id = ?;", [ id ],()=>{
                    resolve("client delete successfully!") 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}
}

async function returnQuantityClients(): Promise<string> {
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("SELECT COUNT(*) AS clients FROM Clients;", [],(transaction,results)=>{
                    resolve(results.rows.item(0)) 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function returnQuantityClientsBySituation(situation: string) : Promise<string>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("SELECT COUNT(*) AS clients FROM Clients WHERE situation=?;", [situation],(transaction,results)=>{
                    resolve(results.rows.item(0)) 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

export { createTableClients, returnAllClients, returnClientById, deleteClientById, insertClient, updateClient, returnQuantityClients, returnQuantityClientsBySituation }