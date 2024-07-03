import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

function MyState(props) {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }

    //* search state
    const [searchkey, setSearchkey] = useState('');

    //* loading state
    const [loading, setloading] = useState(false);

    //* getAllBlog State 
    const [getAllBlog, setGetAllBlog] = useState([]);



    function getAllBlogs() {
        setloading(true);
        try {
            const q = query(
                collection(fireDB, "blogPost"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = [];
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });
                
                setGetAllBlog(blogArray)
                // console.log(productsArray)   
                         setloading(false)
    
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }
    
    useEffect(() => {
        getAllBlogs();
    }, []);

    return (
        <MyContext.Provider value={{
            mode,
            toggleMode,
            searchkey,
            setSearchkey,
            loading,
            setloading,
            getAllBlog
        }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
