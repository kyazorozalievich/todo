import React, { useState } from 'react';
import { ToDoContext } from '.';

const RootContext = ({children}) => {
    const [text, setText] = useState([])
    return (
        <ToDoContext.Provider value={{
            text, 
            setText,
        }}>
            {children}
        </ToDoContext.Provider>
    );
};

export default RootContext;