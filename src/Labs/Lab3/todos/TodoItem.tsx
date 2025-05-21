// Pauline Saveliev
// CS5610 - Summer 1 2025

import { ListGroup } from "react-bootstrap"

const TodoItem = ( { todo = { done: true, title: 'Buy milk',
                                status: 'COMPLETED' } }) => {
        return (
            <ListGroup.Item>
                <input type="checkbox" className="me-2"
                        defaultChecked={todo.done}/>
                {todo.title} ({todo.status})
            </ListGroup.Item>
        );
    }

export default TodoItem;