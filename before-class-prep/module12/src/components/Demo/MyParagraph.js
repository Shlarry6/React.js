import React from 'react';

const MyParagraph = (props) => {
    console.log("MyParagraph run");
    return <p>{props.children}</p>;
};

export default MyParagraph;