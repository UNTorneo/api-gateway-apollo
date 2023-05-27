import { ContextValue } from "../..";
import { redisClient } from "../../core/redis/redis";

export const checkToken = async(token) =>{
    const redisToken = await redisClient.get(token);
    console.log('redisToken',redisToken);
    if(redisToken)return true;
    return false;
}