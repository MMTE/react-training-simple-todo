import List from "../components/List";
import {useState} from "react";

export function App() {

    const [items, setItems] = useState([
        'milk',
        'water',
        'banana',
        'tea',
        'apple',
        'chocolate',
    ])

    const [input, setInput] = useState("")

    const addTask = () => {
        setItems(prevState => [...items , input])
        setInput("")
    }

    return (
        <div className='py-20 min-h-screen'>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold'>My Todo list</h1>
                <hr/>
                <div className='mt-10'>
                    <input
                        onChange={(event) => {
                            setInput(event.target.value)
                        }}
                        value={input}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-2xl"
                        id="task" type="text" placeholder="add task..."/>
                    <button
                        onClick={addTask}
                        className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">add
                    </button>
                </div>
                <div className='mt-10'>
                    {
                        items.map((item) => {
                            return (
                                <div className='mt-4'>
                                    <List title={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
