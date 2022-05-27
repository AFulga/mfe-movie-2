import React, { useEffect } from "react";

const Movie2 = () => {
    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/639933?api_key=d4a8045464e5c17496ef776ab07cea1a')
        .then(response => {
            console.log('Movie2-response', response)
        })
    },[])
    return <div>Movie 2</div>
}

export default Movie2;