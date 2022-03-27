const { createClient } = require('redis');

module.exports = {
    setValue: async(key,value)=>{
        const client = createClient();
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();
        await client.set(key, value);

    },
    getValue: async(key)=>{
        const client = createClient();
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();
        return await client.get(key);
    }
}