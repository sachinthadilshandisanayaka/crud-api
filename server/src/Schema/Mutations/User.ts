import {UserType} from "../TypeDefs/User";
import {GraphQLID, GraphQLString} from "graphql";
import {Users} from "../../Entities/Users";
import {MessageType} from "../TypeDefs/Message";

export const CREATE_ALL_USERS = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const {name, username, password} = args;
        await Users.insert(args);
        return args;
    },
};

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: {type: GraphQLString},
        oldPassword: {type: GraphQLString},
        newPassword: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const {username, oldPassword, newPassword} = args;
        const user = await Users.findOne({username: username});

        if (!user) {
            throw new Error("USER NAME DOES NOT EXIST");
        }
        const userPassword = user?.password;

        if (userPassword === oldPassword) {
            await Users.update({username: username}, {password: newPassword});
            return ({successful: true, message: "UPDATE SUCCESSFUL"});
        } else {
            throw new Error("OLD PASSWORD IS NOT MATCH!");
        }
    },
};

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Users.delete(args);

        return ({successful: true, message: "DELETION SUCCESSFUL"});
    },
};
