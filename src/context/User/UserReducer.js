import {GET_PROFILE, GET_USERS} from '../types';

export default function (state, action) {
    const {payload, type} = action;
    console.log('payload: ', payload);
    console.log('action: ', action);

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }    
        default:
            return state;
    }
}