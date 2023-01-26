import { createTableClients } from "./clients";
import { createTableNotes } from "./notes";

const databaseInit = () : void =>{
    createTableNotes()
    createTableClients()
}

export { databaseInit } 