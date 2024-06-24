import React from "react";

const Digit = ({numero,unidad}) => {
	return (
        <div>
            <h1 className="text-white p-5">{numero}</h1>
            <h3 className="text-white p-5 pt-0">{unidad}</h3>
        </div>
        
    );
};

export default Digit;