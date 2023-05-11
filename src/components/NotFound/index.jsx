import React from 'react'
<<<<<<< HEAD


const NotFound =()=>{
 return(

    <>
        <h1></h1>
    </>
 )
    
=======
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <>
            <h1>Página não encontrada</h1>
            <Link to="/">Voltar</Link>
        </>
    );
>>>>>>> 1147ac5802223158d8c4cacf88c727bf611227fa
}

export default NotFound