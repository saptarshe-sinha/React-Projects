import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [todo, setTodo] = useState("")  //Here "todo" is string 
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        // addTodo({id: Date.now(), todo:todo, completed: false})
        addTodo({todo, completed: false})  // we can write todo:todo as todo as key & value are of same name
        setTodo("")  //Again we set the value of todo as empty string after submitting the form
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
