import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Paginate from "../../components/Paginate/Paginate";
import Style from "./Homescreen.module.css";

function Homescreen() {
	// state to store the list of all characters for a particular page number
	const [data, setData] = useState([]);

	const [pageNumber, setPageNumber] = useState(1);

	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

	useEffect(() => {
		// fetching data using api and updating the data state
		const getData = async () => {
			try {
				let response = await axios.get(api);
				setData(response.data.results);
			}
			catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [api]);


	// iterating through each item in the character array and rendering a card component for each item
	let characters = data.map(item => {
		return <Card key={item.id} data={item} />;
	});



	return (
		<div className={Style.homescreen}>
			<div className={Style.container}>
				{characters}
			</div>
			<Paginate pageNumber = {pageNumber} setPageNumber = {setPageNumber} />
		</div>
	);
}

export default Homescreen;