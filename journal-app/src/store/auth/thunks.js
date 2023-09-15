import { CleaningServicesOutlined } from "@mui/icons-material";
import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
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
        const resp = await registerUserWithEmailPassword({ email, password, displayName });
        
        console.log(resp);
    }
}