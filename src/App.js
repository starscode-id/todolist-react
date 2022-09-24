import './App.css';
import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import InputArea from './components/InputArea';

function App() {
    const [items, setItems] = useState([]);

    function addItem(inputText){
    setItems((prevItems)=>{
    return [...prevItems, inputText]
    });
}

    function deleteItem(id){
    setItems((prevItems)=>{
    return prevItems.filter((item, index)=>{
        return index !== id;
    });
    });
}
    console.log(items);
return (
    <div className="container">
    <div className="heading">
        <h1>To-Do List</h1>
    </div>
    <InputArea onAdd={addItem} />
    <div>
        <ul>
            {items.map((item, index)=>(
                <TodoItem key={index} id={index} text={item} onChecked={deleteItem} />
            ))}
        
        </ul>
    </div>
    </div>
);
}

export default App;
