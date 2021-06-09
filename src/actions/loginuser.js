//we will make action creator for the login user
export const THE_LOGIN_USER ='THE_LOGIN_USER'

export function thechosenloginuser (id){
    return {
        type : THE_LOGIN_USER,
        id,
    }
}