import Main from "../UI/Main/Main";
import { useState, useEffect } from 'react';
import axios from 'axios';

const PracticeDetail = (props) => {

    //State variable for storing one newsItem
    const [practice, setPractice] = useState();

    // data retrieval function
    const getPractice = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/practices/${props.id}`);
            console.log("Practice is: ", result.data);

            // Set state variable to data retrieved from API
            setPractice(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPractice();
    }, []);

    // Make sure we have data before returning
    if (practice) {
        return (
            <Main>
                <h1>{practice.title}</h1>
                <div className="frame3">
                    <div className="box">
                        <img src={require(`../../Assets/images/${practice.image}`)} alt="Img" height="199" width="584" />
                    </div>
                </div>
                <p>
                    {practice.description}
                </p>
            </Main>
        );
    }
}

export default PracticeDetail;