
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { IContent } from './model'
interface IProp {
    loading: boolean;
    contents: IContent[],
    content: any,
    getContents: (courseId: any) => void;
    getContent: (contentId: any) => void;

}
const ContentContext = createContext<IProp>({
    loading: false,
    contents: [],
    content: {},
    getContents(courseId) { },
    getContent(contentId) { },

});

export const useContentContext = () => {
    let context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const ContentProvider: React.FC<IProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [contents, setContents] = useState<IContent[]>([]);
    const [content, setContent] = useState<any>({})


    const port = "https://lightboardserver.onrender.com/api"



    const getContents = async (courseId: any) => {
        setLoading(true)
        try {
            const response = await axios.get(`${port}/contentes/${courseId}`);
            setContents(response.data)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.error('Error Creating Course:', error);
            throw error;
        }
    };


    const getContent = async (contentId: string) => {
        setLoading(true)
        try {
            const response = await axios.get(`${port}/content/${contentId}`);
            setContent(response.data)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.error('Error Creating Course:', error);
            throw error;
        }
    };



    return (
        <ContentContext.Provider
            value={{ loading, content, contents, getContents, getContent }}>
            {children}

        </ContentContext.Provider>
    )
}