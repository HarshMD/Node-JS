const fs = require("fs/promises");
async function saveConfig(){
    const config = {
        appName: "Some App",
        port:3456,
        debug: false,
        allowedOrigins: ["http://localhost:3000", "http://somesite.com"]
    };

    const json = JSON.stringify(config, null, 4);
    //four tab spaces will be applied
    await fs.writeFile("config.json", json, "utf8");

    const raw = await fs.readFile("config.json", "utf8");
    const parsedJson = JSON.parse(raw);
    console.log(parsedJson);
}
