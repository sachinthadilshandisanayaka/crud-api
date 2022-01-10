import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {GET_ALL_USERS} from "./Queries/User";
import {CREATE_ALL_USERS, DELETE_USER, UPDATE_PASSWORD} from "./Mutations/User";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_ALL_USERS,
        deleteUser: DELETE_USER,
        updatePassword: UPDATE_PASSWORD,
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
