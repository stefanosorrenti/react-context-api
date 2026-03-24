//IMPORTS
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppCard from "../components/AppCard";
import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext"

export default function Products() {
    //DATA
    
    const {budgetMode} = useContext(BudgetContext)
    //USE STATE
     //Variabili di stato per rendere reattive i miei dati
     const [productData, setProductData] = useState([])
    const [renderProducts, setRenderProducts] = useState([])
    
    

    
    useEffect(() => {

        axios.get('https://fakestoreapi.com/products') //Uso AXIOS per la chaimata ajax
            .then(res => { //Qui gestisco la risposta
                //console.log(res.data)
               //Imposto la mia variabile di statao uguale ai dati dela risposta
                setProductData(res.data)
                setRenderProducts(res.data)
                
            })

            .catch(err => { //Qui gestisco eventuali errori 
                alert(`Qualcosa è andato storto con le API. 
                    ${err}`) //Alert in caso di errore
            })


    }, [])

    
    useEffect(()=>{
        if(budgetMode === false) {
            const filtred = renderProducts.filter(product => product.price < 30)
            setRenderProducts(filtred)
            
        } else {
            setRenderProducts(productData)
        }

    }, [budgetMode])    
        

 
    
    
    

    return (

        /* Card sction */
        <section>
            {/* Title */}
            <h1 className="text-white text-center m-5 mb-3">I più venduti.</h1>
            <p className="fs-5 text-center mb-5 text-dark-emphasis">Scopri i nostri articoli più venduti! </p>

            <div className="container">
                <div className="row gap-3 justify-content-center">

                    
                    {/* Dynamic Cards render */}
                    {renderProducts.map(product => (

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