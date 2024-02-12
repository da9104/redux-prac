import { produce } from 'immer'
import { useReducer } from 'react'

const INCREMENT_COUNT = 'increment'
const SET_VALUE_TO_ADD = 'set_value_to_add'
const DECREMENT_COUNT = 'decrement'
const ADD_VALUE_TO_COUNT = 'add_value_to_count'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
           state.count = state.count + 1
           return;
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,  
            }
        case SET_VALUE_TO_ADD:
           state.valueToAdd = action.payload;
           return
        case ADD_VALUE_TO_COUNT:
           state.count = state.count + state.valueToAdd
           state.valueToAdd = 0
           return 
        default:
            return;
            // throw new Error('unexpected error: ' + action.type)
    }
 }

 const Counter = ({initialCount}) => {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        })
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button onClick={increment}> increment +1 {state.count} </button>
                <button onClick={decrement}> increment -1 {state.count} </button>
                <input value={state.valueToAdd} onChange={handleChange} />
                <button>Add</button>
            </form>
        </div>
    )
 }

 export default Counter