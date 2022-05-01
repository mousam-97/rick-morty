import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Style from "./CharacterDetails.module.css";

function CharacterDetails() {

	const { id } = useParams();

	const [data, setData] = useState({});
	const [originData, setOriginData] = useState({});
	const [chapter, setChapters] = useState([]);

	// destructuring all the required information from the fetched data
	const { image, name, origin, location } = data;

	let api = `https://rickandmortyapi.com/api/character/${id}`;
	const originApi = origin?.url;

	useEffect(() => {
		// fetching details for a particular character
		const fetchData = async () => {
			try {
				let response = await axios.get(api);
				setData(response.data);
			}
			catch (error) {
				console.log(error);
			}
		};
		fetchData();

		// fetching origin data for a particular character

		const fetchOriginData = async () => {
			try {
				let response = await axios.get(originApi);
				setOriginData(response.data);
			}
			catch (error) {
				console.log(error);
			}
		};

		if (originApi) {
			fetchOriginData();
		}

		// calling every api in the "episode" array and adding the chapter title to the chapter array using IIFE
		// if (data.episode) {
		// 	data.episode.forEach(item => {
		// 		(async () => {
		// 			try {
		// 				console.log(item);
		// 				let lastChar = item.substring(item.lastIndexOf("/") + 1);
		// 				console.log(lastChar);
		// 				let response = await axios.get(item);
		// 				setChapters(prev => [...prev, response.data.name]);
		// 			}
		// 			catch (error) {
		// 				console.log(error);
		// 			}
		// 		})();
		// 	});
		// }

		// fetching episodes
		let fetchEpisodes = async () => {
			let episodes = [];
			data?.episode?.forEach(item => {
				let lastChar = item.substring(item.lastIndexOf("/") + 1);
				episodes.push(lastChar);

			});

			let episodeList = episodes.join();
			
			try {
				let res = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeList}`);

				if (Array.isArray(res.data)) {
					let data = Array.from(res.data);
					let chapters = data.map(item => {
						return item.name;
					});

					setChapters(prev => [...prev, ...chapters]);
				}
				else{

					setChapters(prev => [...prev, res.data.name]);
				}

			}
			catch (error) {
				console.log(error);
			}
		};
		if (data.episode) {
			fetchEpisodes();
		}




	}, [api, originApi]);

	return (
		<div className={Style.characterDetails}>
			<h1>{name}</h1>
			<div className={Style.container}>

				<div className={Style.box1}>
					<img src={image} alt="character" />
				</div>
				<div className={Style.box2}>
					<h3>Origin: {origin?.name}</h3>
					<h3>Current Location: {location?.name} </h3>
					<h3>Dimension: {originData?.dimension}</h3>
					<h3>No. of residents: {originData?.residents?.length}</h3>
					<h2>Chapters</h2>
					<ul>
						{/* Iterating through each item in the chapter array to print every episode name for that particular character */}
						{chapter.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>

				</div>
			</div>

		</div>
	);
}

export default CharacterDetails;