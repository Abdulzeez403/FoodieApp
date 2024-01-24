import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
interface IProp {
    loading: boolean;
    user: {},
    signIn: (payload: any) => Promise<any>;
    signUp: (values: any) => void;
}
const AuthContext = createContext<IProp>({
    loading: false,
    user: null,
    signIn: (payload) => {
        return null
    },
    signUp: (values) => { }
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


    const port = "192.168.43.233:8081/api"

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
            const response = await axios.post(`${port}/api/students`, userData);
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{ loading, user, signIn, signUp }}>
            {children}

        </AuthContext.Provider>
    )
}