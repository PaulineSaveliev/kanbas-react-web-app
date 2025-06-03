// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer)
    const dispatch = useDispatch();
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <FormControl value={todo.title} className="w-50"
                onChange={(e) => dispatch(setTodo({...todo, title: e.target.value}))} />
                <div>
            <Button onClick={() => dispatch(updateTodo(todo))} className="me-2"
                variant="warning" id="wd-update-todo-click">Update</Button>
            <Button onClick={() => dispatch(addTodo(todo))}
                variant="success" id="wd-add-todo-click">Add</Button>
                </div>
        </ListGroup.Item>
    )
}