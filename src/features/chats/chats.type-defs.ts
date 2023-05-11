export const chatsTypesDef = `#graphql
  type Message {
    id: String!
    message: String!
    date: String!
  }
`;

export const chatsQuerysDef = `#graphql
  chats(tournamentId: String!): [Message]
`;