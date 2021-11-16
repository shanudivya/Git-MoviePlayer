import React from "react";
import { useParams } from "react-router-dom";
//config
import { Image_BASE_URL, POSTER_SIZE } from '../config';
//component
import Grid from './Grid';
import Spinner from './Spinner';

//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const {movieId} = useParams();

const {state: movie, loading, error}=useMovieFetch(movieId)

    return (
        <>
            <div>Movie</div>
        </>
    )
}
<div>Movie</div>

export default Movie;