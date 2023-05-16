import { User } from "../user/users.interfaces";

export interface RequestToken {
    accessToken: String
    user: User
}

export interface ErrorResponse {
    error: String
};


export type TokenResponse = RequestToken | ErrorResponse;