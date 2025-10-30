import { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {toast} from "react-hot-toast"




axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();
 
export const AppProvider = ({children}) => {

    const navigate = useNavigate()

    const [token, setToken] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [input, setInput] = useState('')

    const fetchBlogs = async ()=> {
        try {
            const {data} = await axios.get('/api/blog/all');
            // console.log(data.blogs);
            
            data.success ? setBlogs(data.blogs) : toast.error(data.message)
            
        } catch (error) {
            toast.error("Blog Not Fetches");
        }
    }
    // console.log(blogs,"From conext");

    useEffect(()=> {
        fetchBlogs();
        const storedToken = localStorage.getItem('token')
        if(storedToken){
            setToken(storedToken);
            axios.defaults.headers.common['Authorization'] = `${storedToken}`
        }
    }, [])
    

    
    const value = {
    axios: axios, // ✅ explicit
    navigate, token, setToken, blogs, setBlogs, input, setInput
    };

    
    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    );
}

export const useAppContext = ()=> {
    return useContext(AppContext)
};