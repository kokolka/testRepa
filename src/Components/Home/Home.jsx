import React from "react";
import { Navigate } from "react-router-dom";

const Home = (props) => {

    if (!props.UserId) {
        return <Navigate to="../login" />;
    }

    return (
        <div>
            <div>
                {`Ваш контактный ID: ${props.UserId}`}
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Home;