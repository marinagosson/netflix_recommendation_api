import { app } from "./app.js";
import { database } from "./config/database.js";

const PORT = Number(process.env.PORT) || 3000;

async function start() {

    try {

        await database.query("SELECT NOW()");

        console.log("✅ Conectado com sucesso ao banco de dados!");

        app.listen(PORT, () => {
            console.log(`🚀 API executando em http://localhost:${PORT}`);
        });

    } catch (error) {

        console.error(error);

    }

}

start();