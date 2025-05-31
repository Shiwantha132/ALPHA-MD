const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61V2Y6jOBT9lZZfE3WAsEYqadhCICH7QjKaBwcMcYWtbBNCWvn3Eamq7tJMT0+NNDyBbe49595zrr+BvMAUjVEDBt9ASfAFMtS+sqZEYACMKo4RAV0QQQbBALh2/yWYDNdsrneSsiawGltXXpuE9HC9bWcRdYPFbYokcys+gXsXlNUxxeEvAt56k+io4waW6CZlxzzY+4F47s8WLx2uM1bC5Wa65ZINf82LJ3BvI0JMcJ7Y5QlliMB0jJo5xORz8B3HqIvbGRlIM0RkP8+goZU3my6l4ja6WXbv6KWd644rHfdz8PvFc+dk02BkCKeamjl33DS27jpxFVerzkywe6FQHZ7FsbN5hU9xkqPIjVDOMGs+XXdqyj3x4mWps0/8pNLK58xnk4tqVBPLdfnDnK63+ogfJ8EngStT1qk5EuuXsH+yrJIdELMuVlGatHfsZdIcb+soWAybnfsR+Jy8a+X8X+reDPvbaYw9OcwWhzMxD9eFtrhU81tEzF3PPhnWWPTSi4W5xSfh+8pqEmRbrs+H2EmPQzaDrkXpvA6nC/foU3yobp3G9W/1D/iQVeRXKP0wIuGa4yZ6zsxtMN008qzpV8tRxWWRyM/8s+v5dOSs+SA+LqUdvJ5UeaGbauWhFd64xyQdjSz2HDneWDxUWLvwNtafHozOqHEjMODvXUBQgikjkOEib9dkvgtgdFmhkCD2qC6QpogbTjrT5/nhXJHdquEvxJq4oVTL081k16vGRVqP/XOwCZ9AF5SkCBGlKBphygrS+IhSmCAKBr8/GtVyJigrGPJwBAZAExVF0gReU5Xf6Nf6BBmFZfk1Rwx0QUyKzEdgwEiFuuBxfsgrmikPJUGxhaGh2RovqIrd1zm+Pxwast0SzF5zrnGGKINZCQa8IqqyrGmKeu/+LzBsWzAEVRaHIi+JpqHKtiwqAt8f2pzAS4b6axiqcP+jC3J0Za8ibkvf57sgxoSyTV6VaQGjd4W/b8IwLKqcrZo8NNsXRMDgwzJiDOcJbYlVOSThCV+Q2fIAgximFH3vNiIoeufyNsHMImpF6DmmpR3WGmixt4H+WpoBL/29OjlsDwM3+0JPuIZfIlIkKAddkD5+5xW5L0iKqiqSygtSG6LduH9H3iaKEIM4pWAATHd05SfqyHZ3VKa24+h2opuJDn4wfbfPqz57RVzUS1t2O56ol8MXXrk5RZbu00TKuOK62rzo+/k6yS4L++knQdqJEGcpNz35irieD88vvqVlMVG8BAmBmZLysE/29FAfKsILtH9cx8tqsg/V+SI24wYtznTLnummN8t7Qi7wh6gHPUvQk6c2W4QuOEQfk+nrRc0JXG8HVUV2siD2n9Or7shIa+hWwvQiLWYukYxjVEqFJW/K4yUt1ixYqqZzC7zAq+clFxxXc1rb+zSnE2GzOdWvxn4MlvRtoOM3z+HHZ4zRYz6+NevfevqKu1Ued+9+CPE2cP9haBmxPJJ9eznDc4z08RIypF5fvHLn7WcHNvY36ThxLE70CGeAe2uBMoUsLkjWXivZEYIuIEXV6tjN4+IXmUydc43FK+sUUqb/8MbPXM+/npqTohxBemovy6V26D+E3uhluWKQvVsN6O1j6kNw/xOk64wYkggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254743995989",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
