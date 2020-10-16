const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {

    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.4646269",
        long: "-46.4097988",
        name: "Lar dos Meninos",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "11965633278",
        images: [
            "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1573449595343-f5e436ae1091?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade a traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})