
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
interface IProp {
    loading: boolean;
    courses: any[],
    course: any,
    enrollStudent: any,
    getCourses: () => void;
    getCourse: (courseId: any) => void;
    getEnrolledStudent: (studentId: any) => void;
    createEnrolledStudent: (payload: any) => void;

}
const CourseContext = createContext<IProp>({
    loading: false,
    courses: [],
    course: {},
    enrollStudent: {},
    getCourses() { },
    getCourse(courseId) { },
    getEnrolledStudent(studentId) { },
    createEnrolledStudent(payload) { }
});

export const useCourseContext = () => {
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
    const [enrollStudent, setEnrollStudent] = useState<{}>({})


    const port = "https://lightboardserver.onrender.com/api"



    const getCourses = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${port}/courses`);
            setCourses(response.data)
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

    const getEnrolledStudent = async (studentId: any) => {
        try {
            const response = await axios.get(`${port}/enrollendStudent/${studentId}`);
            setEnrollStudent(response.data);
            return enrollStudent
        } catch (error) {
            console.error('Error Creating Course:', error);
            throw error;
        }

    }

    const createEnrolledStudent = async (payload: any) => {
        try {
            const response = await axios.post(`${port}/enrollStudent`, payload);
            setEnrollStudent(response.data);
            return enrollStudent
        } catch (error) {
            console.error('Error Creating Course:', error);
            throw error;
        }

    }



    return (
        <CourseContext.Provider
            value={{ loading, courses, course, getCourses, getCourse, createEnrolledStudent, getEnrolledStudent, enrollStudent }}>
            {children}

        </CourseContext.Provider>
    )
}