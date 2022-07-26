import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick = { () => logout( {returnTo: window.location.origin} )} type="button" class="btn btn-primary" _msthash="1333917" _msttexthash="115193">Logout</button>
    );
}