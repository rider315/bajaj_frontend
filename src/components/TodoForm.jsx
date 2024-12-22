import React from 'react'
import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";
export default function TodoForm() {
    const [text, setText] = useState("");

    const dispatch=useDispatch();
  
    const onFormSubmit = (e) => {
      e.preventDefault();
      dispatch(addNewTodo(text));
      setText('');
        
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }
  return (
    <div class="form-container">
  <form class="form" onSubmit={onFormSubmit}>
    <input  
        placeholder="Enter Your Kaam."
        class="input"
        onChange={onInputChange}
        value={text}
    />
  </form>
</div>
  )
}
