import { ContextValue } from "../..";

export const consumerPostQueryResolvers = {
    getConsumerPost: async (_, __, { dataSources }: ContextValue) => {
        const res = await dataSources.consumerPostApi.getConsumerPost();
        console.log(res);
        return res;
    },
}