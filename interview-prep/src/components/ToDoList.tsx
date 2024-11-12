import React, { useState, useRef, useEffect } from "react";
import Button, { Variants } from "./Button";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function ToDoList<T>({ items, renderItem }: ListProps<T>) {

  const [todolist, setTodolist] = useState<T[]>(items);

  useEffect(()=>{
    setTodolist(items);
  },[items]);

  return (
    <>
      {todolist.map((item, index) => (
        <div key={index}>
          {renderItem(item)}
        </div>
      ))}
    </>
  );
}

export default ToDoList;
