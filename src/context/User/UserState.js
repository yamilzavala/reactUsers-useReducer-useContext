import React, {useReducer} from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import {GET_PROFILE, GET_USERS} from '../types';
import axios from 'axios'

const UserState = (props) => {
    //state
    const initialState = {
        users: [],
        selectedUser: null
    };

    //useReducer
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        const url = 'https://reqres.in/api/users';
        const response = await axios.get(url);
        dispatch({
            type: 'GET_USERS', 
            payload: response.data.data
        });
        console.log(response.data.data);
    }

    const getProfile = async (idUser) => {
        const url = `https://reqres.in/api/users/${idUser}`;
        const response = await axios.get(url);
        dispatch({
            type: 'GET_PROFILE',
            payload: response.data.data
        })
        console.log('USER PROFILE: ',response.data.data);
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
            }
        }>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;