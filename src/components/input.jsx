import React from "react";
import { useState } from "react";
// import Box from '@mui/material';
// import Input from '@mui/material/Input';


export default function mInput() {
    const [item, updateItem] = useState("")
    const [amount, updateamount] = useState("")
    const textInput = (e) => {
        const ele = e.target
        ele.id === "item" ? updateItem(ele.value) : updateamount(ele.value)
    }
    const addNew = () => {
    console.log("Got clicked")
    console.log(item)
        console.log(amount)
        document.getElementById("item").value = ""
        document.getElementById("amount").value = ""
        const data = {id:Math.random()*1000, name:item,price:amount}
        fetch("http://localhost:5000/product", {
            method: "Post",
            headers: {
    'Content-Type': 'application/json'
  },
            body: JSON.stringify(data)
        })
}
    return <div>
        <h1>Add new product</h1>
        
        <input id="item" placeholder="item" onInput={textInput}/>
        <input id="amount" placeholder="amount" onInput={textInput}/>
        <button onClick={addNew}>Add</button>
    </div>
}
