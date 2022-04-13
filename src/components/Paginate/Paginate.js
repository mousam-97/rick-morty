import React from 'react';
import Style from "./Paginate.module.css";

function Paginate({ pageNumber, setPageNumber }) {
    console.log(pageNumber);

    const handleNext = () => {
        setPageNumber(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (pageNumber === 1)
            return;
        setPageNumber(prev => prev - 1);
    };

    return (
        <div>
            <button onClick={handlePrevious} className={Style.button}>Previous</button>
            <button onClick={handleNext} className={Style.button} >Next</button>
        </div>
    );
}

export default Paginate;