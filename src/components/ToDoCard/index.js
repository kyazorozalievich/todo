import React, { useContext } from "react";
import { ToDoContext } from "../../context";

const ToDoCard = ({el}) => {
    const {toDo, setToDo} = useContext(ToDoContext)

    const deleteToDo = (id) => {
        let delToDO = JSON.parse(localStorage.getItem('todo')) || []
        delToDO=toDo.filter((el)=> el.id !== id)
        localStorage.setItem('todo', JSON.stringify(delToDO))
        setToDo(delToDO)
    }

    const reiting = Math.floor(Math.random() * 5)

  return (
    <div className="w-full max-w-[400px] h-[500px] mt-[100px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="img w-[100%] h-[300px]">
      <a href="#">
        <img className="p-8 rounded-t-lg w-[90%]" src={el.url} alt="product image" />
      </a>
        </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {el.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div className="star" style={{background: reiting >= 1 ? 'yellow' : 'gray'}}></div>
            <div className="star" style={{background: reiting >= 2 ? 'yellow' : 'gray'}}></div>
            <div className="star" style={{background: reiting >= 3 ? 'yellow' : 'gray'}}></div>
            <div className="star" style={{background: reiting >= 4 ? 'yellow' : 'gray'}}></div>
            <div className="star" style={{background: reiting >= 5 ? 'yellow' : 'gray'}}></div>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {reiting}.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {el.price}$
          </span>
          <a
            href="#"
            className="text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-blue-800"
            onClick={()=> {
                deleteToDo(el.id)
            }}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
