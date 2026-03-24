//IMPORTS
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppCard from "../components/AppCard";
export default function Products() {
    //DATA


    //USE STATE
    const [products, setProducts] = useState([]) //Variabile di stato per rendere reattive i miei dati
    //USE EFFECT
    useEffect(() => {

        axios.get('https://fakestoreapi.com/products') //Uso AXIOS per la chaimata ajax
            .then(res => { //Qui gestisco la risposta
                //console.log(res.data)
                setProducts(res.data) //Imposto la mia variabile di statao uguale ai dati dela risposta
            })

            .catch(err => { //Qui gestisco eventuali errori 
                alert(`Qualcosa è andato storto con le API. 
                    ${err}`) //Alert in caso di errore
            })


    }, [])


    


    return (

        /* Card sction */
        <section>
            {/* Title */}
            <h1 className="text-white text-center m-5 mb-3">I più venduti.</h1>
            <p className="fs-5 text-center mb-5 text-dark-emphasis">Scopri i nostri articoli più venduti! </p>

            <div className="container">
                <div className="row gap-3 justify-content-center">

                    
                    {/* Dynamic Cards render */}
                    {products.map(product => (

                        /* AppCard component */
                        <AppCard key={product.id} cardId={product.id} cardImg={product.image}
                            cardTitle={product.title} cardCategory={product.category}
                            cardDescrption={product.description} cardPrice={product.price}
                        />
                    ))}

                    
                </div>
            </div>

        </section>
    )
}