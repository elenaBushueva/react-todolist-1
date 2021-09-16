import React, {useState} from 'react';

const initialList = [
    {id: 1, name: 'Learn JS'},
    {id: 2, name: 'Learn React'}
]

const App = () => {

    const [list, setList] = useState(initialList);
    const [input, setInput] = useState('');

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const addToList = () => {
        setList([...list, {id: Math.random(), name: input}])
        setInput('');
    }

    return (
        <div>

            <input type="text" value={input} onChange={onChangeInput}/>
            <button onClick={addToList}>Add to list</button>

            <ul>
                {list.map(el => <li key={el.id}>{el.name}</li>)}
            </ul>
        </div>
    );
};

export default App;