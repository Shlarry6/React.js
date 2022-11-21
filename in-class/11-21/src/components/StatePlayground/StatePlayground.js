import {useState} from 'react';

const StatePlayground = () => {
    const [name, setName] = useState('');
    const [copiedMessage, setCopiedMessage] = useState(false);
    const [counter, setCounter] = useState(0);

    const printNameHandler = (event) => {
        setName(event.target.value);
        console.log(name);
    }

    const copyHandler = (event) => {
        setCopiedMessage(true);
        console.log(event.target.value);
        
    }

    const counterClickHandler = (event) => {
        setCounter(prevCounter => prevCounter + 1);
    }

    return (
        <>
            <p>Please enter your name:</p>
            <input type="text" onBlur={printNameHandler} onCopy={copyHandler}></input>
            <p>Welcome, {name}</p>
            {copiedMessage && <p>You copied the name.</p>}

            <button onClick={counterClickHandler}>Increment Counter</button>
            <p>Counter: {counter}</p>
        </>
    );
}

export default StatePlayground;