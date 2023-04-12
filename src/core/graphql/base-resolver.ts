export const baseResolver = {
    RequestResponse: {
        __resolveType(obj, contextValue, info) {
            if (obj.message) {
                return 'SucessResponse';
            }
            if (obj.error) {
                return 'ErrorResponse';
            }
            return null; // GraphQLError is thrown
        },
    },
}