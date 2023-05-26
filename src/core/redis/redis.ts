import { createClient } from 'redis';

let clientRedis;

const startRedis = async()=>{
    clientRedis = createClient(
        { url: 'redis://default:cOdlLDjp5YKs7fyDPLUdEZIALL57XFAD@redis-15442.c11.us-east-1-2.ec2.cloud.redislabs.com:15442' }
        );
    
    
    clientRedis.on('error', err => console.log('Redis Client Error', err));
    
    await clientRedis.connect();
    console.log('Conectado a Redis');
    return clientRedis;
}

export { clientRedis as redisClient, startRedis }