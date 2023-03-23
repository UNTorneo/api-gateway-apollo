export interface SucessResponse {
    message: String
};

export interface ErrorResponse {
    error: String
};

export type RequestResponse = SucessResponse | ErrorResponse;
