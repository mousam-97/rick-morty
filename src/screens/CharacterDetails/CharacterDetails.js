import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Style from "./CharacterDetails.module.css";

function CharacterDetails() {

    const { id } = useParams();


    const [data, setData] = useState({});
    const [originData, setOriginData] = useState({});
    const [chapter, setChapters] = useState([]);



    const { image, name, origin, location } = data;

    let api = `https://rickandmortyapi.com/api/character/${id}`;
    let originApi = origin?.url;


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(api);
                setData(response.data);
            }
            catch (error) {
                console.log(error);
            }
        };

        const fetchOriginData = async () => {
            try {
                let response = await axios.get(originApi);
                setOriginData(response.data);
            }
            catch (error) {
                console.log(error);
            }
        };

        if (data.episode) {
            data.episode.forEach(item => {
                (async () => {
                    try {
                        let response = await axios.get(item);
                        setChapters(prev => [...prev, response.data.name]);
                    }
                    catch (error) {
                        console.log(error);
                    }
                })();
            });
        }

        fetchData();
        fetchOriginData();
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
                        {chapter.map(item => {
                            return <li>{item}</li>;
                        })}
                    </ul>

                </div>
            </div>

        </div>
    );
}

export default CharacterDetails;