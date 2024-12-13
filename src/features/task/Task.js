import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./taskSlice"


const Task = () => {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(increment(10))}>Increse</button>
            {counter}
            <button onClick={() => dispatch(decrement(5))}>Decrese</button>
        </div>
    )

}

export default Task;

