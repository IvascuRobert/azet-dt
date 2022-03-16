import { DataServiceError } from "@ngrx/data";

export interface User extends DataServiceError {
    id?: string;
    email?: string;
    password?: string;
    accessToken?: string;
    firstName?: string;
    lastName?: string;
}