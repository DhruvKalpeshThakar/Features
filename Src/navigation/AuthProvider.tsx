import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setuser] = useState()

    return (
        <AuthContext.Provider value={{
            user,
            setuser,
            login: async (email: string, password: string) => {
                try {
                    await auth().signInWithEmailAndPassword(email, password)
                } catch (error) {
                    console.log(error);

                }
            },
            register: async (email: string, password: string) => {
                try {
                    await auth().createUserWithEmailAndPassword(email, password)
                } catch (error) {
                    console.log(error);

                }
            },
            logout: async () => {
                try {
                    await auth().signOut()
                } catch (error) {
                    console.log(error);

                }
            },
        }}>

        </AuthContext.Provider>
    )
}