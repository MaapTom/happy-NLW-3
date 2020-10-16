// chamando o sqlite
const Database = require('sqlite-async');

function execute(db) {
  return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            long TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `);
}

// criando um arquivo database.sqlite no meu diretório 
// e executando uma função de criação de tabela, e exportando para utiliza-lo
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)