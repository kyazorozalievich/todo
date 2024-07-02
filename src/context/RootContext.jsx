import React, { useEffect, useState } from 'react';
import { ToDoContext } from '.';

const RootContext = ({children}) => {
    const [toDo, setToDo] = useState([])
    const getAll = ()=> {
        let  res = JSON.parse(localStorage.getItem('todo')) || []
        setToDo(res)
    }

    useEffect(()=> {
        getAll()
    },[])
    return (
        <ToDoContext.Provider value={{
            toDo, 
            setToDo,
        }}>
            {children}
        </ToDoContext.Provider>
    );
};

export default RootContext;