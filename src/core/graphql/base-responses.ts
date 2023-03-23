export const baseTypesDef = `#graphql
    type SucessResponse {
        message: String!
    }

    type ErrorResponse {
        error: String!
    }

    union RequestResponse = SucessResponse | ErrorResponse
`;