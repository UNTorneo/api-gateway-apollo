export const baseResolver = {
    RequestResponse: {
        __resolveType(obj, contextValue, info) {
            // Only Author has a name field
            if (obj.message) {
                return 'SucessResponse';
            }
            // Only Book has a title field
            if (obj.error) {
                return 'ErrorResponse';
            }
            return null; // GraphQLError is thrown
        },
    },
}