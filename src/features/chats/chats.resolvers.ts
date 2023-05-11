import { ContextValue } from "../..";

export const chatsQueryResolvers = {
  chats: async (_, { tournamentId }, { dataSources }: ContextValue) => {
    console.log('tournamentId', tournamentId)
      return dataSources.chatsApi.getMessages(tournamentId);
  }
}