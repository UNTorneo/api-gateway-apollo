export interface RequestToken{
    accessToken: String
}

export interface ErrorResponse {
    error: String
};


export type TokenResponse = RequestToken | ErrorResponse;