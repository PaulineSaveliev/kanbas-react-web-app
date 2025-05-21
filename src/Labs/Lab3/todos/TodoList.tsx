// Pauline Saveliev
// CS5610 - Summer 1 2025

import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import todos from "./todos.json";

export default function TodoList() {
    return (
        <>
            <h3>Todo List</h3>
            <ListGroup>
                { todos.map(todo => {
                    return(<TodoItem todo={todo}/>)
                })}
            </ListGroup>
        </>
    )
}