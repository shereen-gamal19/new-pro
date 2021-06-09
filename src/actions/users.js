//we will make action to get all our users
export const RECEIE_ALL_USERS = 'RECEIE_ALL_USERS'
//we will make an action creator to  the users action

export function receiveAllUsers (users) {
    return {
        type: RECEIE_ALL_USERS,
        users,
    }
}