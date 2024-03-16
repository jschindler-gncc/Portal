import { IdNameModel, ROLE } from "core";

export interface User extends IdNameModel {
    email: string;
    role: ROLE
}