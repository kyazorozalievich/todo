import React, { useContext, useState } from "react";
import { ToDoContext } from "../../context";

const ToDoList = () => {
  const { toDo, setToDo} = useContext(ToDoContext);
  const [inputUrl, setInputUrl] = useState('')
  const [inputName, setInputName] = useState('')
  const [inputPrice, setInputPrice] = useState('')

  const addToToDo = () => {
    if (inputName==='' || inputPrice==='' || inputUrl==='') {
      alert('404')
    } else {
      let newToDo = {
        id: Date.now(),
        url: inputUrl,
        title: inputName,
        price: inputPrice
  
      }
      let result = [...toDo, newToDo]
      setToDo(result)
      localStorage.setItem('todo', JSON.stringify(result))
      setInputName('')
      setInputPrice('')
      setInputUrl('')
    }
  }


  return (
    <div className="container">
      <div className="toDo w-[50%] mx-auto flex items-center flex-col gap-[30px] mt-[100px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e)=> {
              setInputUrl(e.target.value)
            }}
            value={inputUrl}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product (URL)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e)=> {
              setInputName(e.target.value)
            }}
            value={inputName}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e)=> {
              setInputPrice(e.target.value)
            }}
            value={inputPrice}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Price
          </label>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-3"
          onClick={()=> {
            addToToDo()
          }}
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
