import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (        
        <button onClick={() => loginWithRedirect()} type="button" class="btn btn-primary" _msthash="1333917" _msttexthash="115193">Login</button>
    );
}