import * as SQLite from 'expo-sqlite'

const db : SQLite.Database = SQLite.openDatabase("main.db")

export default db