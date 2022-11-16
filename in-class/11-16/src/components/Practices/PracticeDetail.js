import { useState, useEffect } from 'react';
import axios from 'axios';

const PracticeDetail = (props) => {
    const [practiceItem, setPracticeItem] = useState();

    const getPracticeItem = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/practices/${props.id}`);
            setPracticeItem(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPracticeItem();
    }, []);

    if(practiceItem) {
        return (
            <>
                <div className="main">
                    <h1>{practiceItem.title}</h1>
                    <div className="frame3">
                        <div className="box">
                            <img src={require(`../../Assets/images/${practiceItem.image}`)} alt="Img" height="199" width="584" />
                        </div>
                    </div>
                    <p>
                        {practiceItem.description}
                    </p>
                </div>
            </>
        );
    }
};

export default PracticeDetail;