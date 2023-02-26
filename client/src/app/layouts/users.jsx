import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import EditUserPage from "../components/pages/user/editUserPage";
import { getCurrentUserId } from "../store/users";
import UsersLoader from "../components/ui/hoc/usersLoader";
import UserProfile from "../components/pages/user/userProfile";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    const currentUserId = useSelector(getCurrentUserId());
    return (
        <UsersLoader>
            {edit ? (
                userId === currentUserId ? (
                    <EditUserPage />
                ) : (
                    <Redirect to={`/user/${currentUserId}/edit`} />
                )
            ) : (
                <UserProfile userId={userId} />
            )}
        </UsersLoader>
    );
};

export default Users;
