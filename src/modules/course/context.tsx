
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
interface IProp {
    loading: boolean;
    courses: any[],
    course: any,
    getCourses: () => void;
    getCourse: (courseId: any) => void;

}
const CourseContext = createContext<IProp>({
    loading: false,
    courses: [],
    course: {},
    getCourses() { },
    getCourse(courseId) { },

});

export const useCouresContext = () => {
    let context = useContext(CourseContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const CourseProvider: React.FC<IProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [courses, setCourses] = useState<[]>([]);
    const [course, setCourse] = useState<any>({})


    const port = "192.168.43.233:8000/api"


    const getCourses = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${port}/courses`);
            setCourses(response.data)
            console.log(response.data)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.error('Error getting Course:', error);
            throw error;
        }
    };


    const getCourse = async (courseId: string) => {
        setLoading(true)
        try {
            const response = await axios.get(`${port}/course/${courseId}`);
            setCourse(response.data)
            console.log(response.data)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.error('Error Creating Course:', error);
            throw error;
        }
    };




    return (
        <CourseContext.Provider
            value={{ loading, courses, course, getCourses, getCourse, }}>
            {children}

        </CourseContext.Provider>
    )
}