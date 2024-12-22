import { useEffect } from 'react';

// import { deleteTodo, getAllTodos } from '../redux/actions/index';
import { getAllTodos, deleteTodo } from '../redux/actions/index';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';

// import { useDispatch} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


// component
import Todo from './Todo';
// import { Todo } from './Todo';
import Tabs from './Tabs';


export const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        })
    }

    return (

        // <div>Hello</div>
        <article>
            <div className='tabscenter'>
                <Tabs currentTab={currentTab} />
                {
                    todos.some(todo => todo.done) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ) : null
                }


            </div>

            <ul className="todo-list">
                {
                    getTodos().map(todo => (
                        <li className="todo-item" key={todo._id}>
                            <Todo todo={todo} />
                        </li>
                    ))
                }
            </ul>

        </article>
    )
}

export default Todos;