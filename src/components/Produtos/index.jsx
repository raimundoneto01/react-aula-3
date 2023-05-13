import React from "react";
import Produto from "../Produto";

const Produtos =()=>{

    const [produtos, setProdutos]= React.useState([]);

    React.useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProdutos(json))

    }, [])
    return(
        <>
        <h1>Produtos</h1>
            <ul className="produtos">
                {
                    produtos.map(produto => {
                        return <li Key={produto.id}><Produto {...produto}/></li>
                    })
                }
            </ul>
        </>

    );
};

export default Produtos;