import {State} from "../../types/state";
import {User} from "../../types/user";
import {AuthorizationStatus, NameSpace} from "../../const";

export const getUser = (state: State): User | undefined => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
