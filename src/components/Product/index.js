import React, { useContext } from 'react';
import { ToDoContext } from '../../context';
import ToDoCard from '../ToDoCard';
import basket from '../../assets/img/basket2.2.png'
import { Link, useNavigate } from 'react-router-dom';



const Product = () => {
    const {toDo} = useContext(ToDoContext)
     const navigate = useNavigate()
    return (
        
        <div>
            <div className="container">
                <div className="product flex items-center gap-[20px] flex-wrap">
                    {toDo.length ? (
                        <>
                        {
                            toDo.map((el, idx)=> <ToDoCard el={el} id={idx}/>)
                        }
                        </>

                    ): (
                        <img src={basket} alt="" className='w-[20%] flex items-center ml-[500px]' onClick={()=> {
                            navigate('/')
                        }} />
                    )}
                   
                </div>
            </div>
        </div>
    );
};

export default Product;