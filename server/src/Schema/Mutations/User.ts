import {UserType} from "../TypeDefs/User";
import {GraphQLString} from "graphql";
import {Users} from "../../Entities/Users";

export const CREATE_ALL_USERS = {
    type: UserType,
    args: {
        name: { type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args;
        await Users.insert(args);
        return args;
    },
};