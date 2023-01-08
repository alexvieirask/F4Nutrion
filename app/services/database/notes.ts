import { TNote } from "../types/note";
import db from "./";

function createTableNotes():Promise<string>{
    try{
        return new Promise((resolve) => {
            db.transaction((transaction)=>{
                transaction.executeSql(
                    `CREATE TABLE IF NOT EXISTS Notes(
                        id INTEGER PRIMARY KEY AUTOINCREMENT, 
                        title TEXT, 
                        content TEXT, 
                        date TEXT);`
                ), ()=> { 
                    resolve("table notes create  successfully!"
                    )}
            })
        })
   
    }
    catch(exception){
        console.log(exception)
    }
}

async function insertNote(note: TNote): Promise<string>{
    try{ 
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql(
                    "INSERT INTO Notes (title, content, date) VALUES (?,?,?);", 
                    [note.title,note.content,note.date],
                    ()=>{
                        resolve("note added successfully!") 
                    })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function returnAllNotes(): Promise<TNote[]>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("SELECT * FROM Notes;", [],(transaction,results)=>{
                    resolve(results.rows._array) 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function returnNoteById(id : number) : Promise<TNote>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("SELECT * FROM Notes WHERE id = ?;", [id],(transaction,results)=>{
                    resolve(results.rows.item(0)) 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function updateNote(note: TNote) : Promise<string>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("UPDATE Notes SET title=?, content=? WHERE id = ?;", 
                [ note.title,note.content,note.id ],()=>{
                    resolve("note edit successfully!") 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function deleteNoteById(id:number) : Promise<string>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("DELETE FROM Notes WHERE id = ?;", [ id ],()=>{
                    resolve("note delete successfully!") 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function returnQuantityNotes(){
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("SELECT COUNT(*) AS notes FROM Notes;", [],(transaction,results)=>{
                    resolve(results.rows.item(0)) 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

async function returnLastNoteAdd() : Promise<TNote>{
    try{
        return new Promise((resolve)=>{
            db.transaction((transaction)=>{
                transaction.executeSql("SELECT * FROM Notes WHERE id=(SELECT MAX(id) FROM Notes);", [],(transaction,results)=>{
                    resolve(results.rows.item(0)) 
                })
            })
        })
    }
    catch(exception){
        console.log(exception)
    }
}

export { createTableNotes, insertNote, updateNote, deleteNoteById, returnAllNotes, returnNoteById, returnQuantityNotes, returnLastNoteAdd }