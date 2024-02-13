import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ICurrentUser } from './modal';
interface IProp {
    loading: boolean;
    user: ICurrentUser,
    signIn: (payload: any) => Promise<any>;
    signUp: (values: any) => void;
    currentUser: (userId: any) => void;
}
const AuthContext = createContext<IProp>({
    loading: false,
    user: null,
    signIn: (payload) => {
        return null
    },
    signUp: (values) => { },
    currentUser: (userId) => { }
});

export const useAuthContext = () => {
    let context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<IProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<{}>({} as any);


    const port = "https://lightboardserver.onrender.com/api"

    // const port = 'http://localhost:8000/api'

    const signIn = async (payload: any) => {
        setLoading(true)

        try {
            const response = await axios.post(`${port}/auth/students`, payload);
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
            setUser(response.data)
            console.log(response.data)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.error('Error signing up:', error);
            throw error;
        }
    };

    const signUp = async (userData: any) => {
        try {
            const response = await axios.post(`${port}/students`, userData);
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    };

    const currentUser = async (userId: any) => {
        try {
            const response = await axios.get(`${port}/student/${userId}`);
            setUser(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching current user:', error);
            throw error;
        }
    };


    const signOut = async () => {
        setLoading(true);
        try {
            await AsyncStorage.removeItem('user');
            setUser(null);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error signing out:', error);
            throw error;
        }
    };


    return (
        <AuthContext.Provider
            value={{ loading, user, signIn, signUp, currentUser, }}>
            {children}

        </AuthContext.Provider>
    )
}