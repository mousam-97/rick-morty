import React from "react";
import Style from "./Paginate.module.css";

function Paginate({ pageNumber, setPageNumber }) {
	//  I can make this pagination component with more features using react-paginate
	//  Currently I am just using the previous and next button for pagination


	// functions to move between next and previous pages
	const handleNext = () => {
		setPageNumber(prev => prev + 1);
	};

	const handlePrevious = () => {

		// To handle negative page number
		if (pageNumber === 1)
			return;
		setPageNumber(prev => prev - 1);
	};

	return (
		<div data-testid="paginate-1" className={Style.paginate}>
			<button onClick={handlePrevious} className={Style.button}>Previous</button>
			<button onClick={handleNext} className={Style.button} >Next</button>
		</div>
	);
}

export default Paginate;