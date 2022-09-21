import React, {useState} from 'react';

const StatePlayground = (props) => {
    const [enteredText, setEnteredText] = useState(null);
    const [copiedMessage, setCopiedMessage] = useState(false);
    const [submissionCounter, setSubmissionCounter] = useState(0);

    const enteredTextHandler = (event) => {
        setEnteredText(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setEnteredText(null);
        setCopiedMessage(false);
    };

    const onCopyHandler = (event) => {
        setCopiedMessage(true);
        console.log(event.target.value);
    };

    const submitCounter = (event) => {
        event.preventDefault();
        setSubmissionCounter(prevSubCounter => prevSubCounter + 1);
    };

    return (
        <div>
            <form action={onsubmit}>
                <p>Please enter your name: </p>
                <input type="text" onChange={enteredTextHandler} onCopy={onCopyHandler}/>
                {enteredText && <p>Welcome {enteredText}</p>}
                {copiedMessage && <p>The message has been copied!</p>}
                <button type="submit" onClick={submitCounter}>Submit</button>
                <p>Number of submissions: {submissionCounter}</p>
            </form>
        </div>
    );
};

export default StatePlayground;