import {useState} from "react";

const List = (props) => {
    const [done, setDone] = useState(false)

    const changeStatus = () => {
        setDone((prevState) => !prevState)
    }

    return (
        <div onClick={changeStatus} className={`rounded-md shadow ${done ? 'bg-green-200' : ''}`}>
            <p className={`p-4 border-2 text-4xl ${done ? 'line-through' : ''}`}>{props.title}</p>
        </div>
    )
}

export default List
