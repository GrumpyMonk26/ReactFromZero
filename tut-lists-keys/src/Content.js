import { useState } from "react";
import {  FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items,setItems] = useState([
        {
            id:1,
            checked:false,
            item: "Buy Milk"
        },
        {
            id:2,
            checked:false,
            item: "Buy Bread"
        },
        {
            id:3,
            checked:false,
            item: "Buy Eggs"
        },
        {
            id:4,
            checked:false,
            item: "Buy Cheese"
        }
    ]);

    const handleCheck = (id) => {
        setItems(items.map(item => {
            if(item.id === id){
                item.checked = !item.checked;
            }
            return item;
        }));
        localStorage.setItem('Shopping List',JSON.stringify(items));
    }

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
        localStorage.setItem('Shopping List',JSON.stringify(items));
    }


    

    return (
        <main>
        {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                            style={(item.checked) ? { textDecoration: 'line-through' } : null}
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt
                            onClick={() => handleDelete(item.id)}
                            role="button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
        ) : (
            <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
        )}
    </main>
    )
}

export default Content