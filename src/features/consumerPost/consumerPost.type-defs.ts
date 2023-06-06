export const consumerPostTypesDef = `#graphql
    type ConsumerPost{
        postId: String
        ownerId: String
        location: String
        description: String
    }
`;

export const consumerPostQuerysDef = `#graphql
    getConsumerPost: ConsumerPost
`;