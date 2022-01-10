import React from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "../Graphql/Queries";

function ListOfUser() {
    const {data, error, loading} = useQuery(GET_ALL_USERS);
    return (
        <div>
            {
                data && (data.getAllUsers.map((user: any) => {
                    return (
                        <div>
                            {" "}
                            {user.name} {" - "}
                            {user.username} {" - "}
                            {user.id}
                            {" "}
                        </div>
                    );
                }))
            }
        </div>
    );
}

export default ListOfUser