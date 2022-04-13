import React from 'react';
import { Link } from "react-router-dom";
import Style from "./Card.module.css";

function Card({ data }) {
   
    return (
        <div className={Style.card}>
            <Link to={`/${data.id}`} className={Style.link}>
                <img src={data?.image} alt="profile-pic" />
                <div className={Style.box1}>
                    <h2>{data?.name}</h2>
                    <h3>Species: {data?.species}</h3>
                    <h3>Gender: {data?.gender}</h3>
                    <h3>Location: {data?.location?.name}</h3>
                </div>
            </Link>


        </div>
    );
}

export default Card;