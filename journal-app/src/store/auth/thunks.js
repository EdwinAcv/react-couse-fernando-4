import { CleaningServicesOutlined } from "@mui/icons-material";
import { loginWithemailPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSingIn = ( ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        if( !result.ok ) return dispatch( logout( result.errorMessage ) )
    
        dispatch( login( result ) );
    }
}  

export const statCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        
        if ( !ok ) return dispatch( logout( {errorMessage} ) );
        dispatch ( login( { uid, displayName, email, photoURL } ) );
    }
}

export const startLoginWithEmailPassword = ({ email, password  }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const { ok, uid, photoURL, errorMessage, displayName } = await loginWithemailPassword({ email, password });
        
        if ( !ok ) return dispatch( logout( {errorMessage} ) );
        dispatch ( login( { uid, displayName, email, photoURL } ) );
    
    }
}