//IMPORTS
import { useParams } from "react-router-dom" //Importo l'hooK per gestire come parametro il url dinamico
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //Import l'hook per gestire la navigazione programmatica
import AppLoading from "../components/AppLoading"; //Importo il componente per i loading

export default function SingleProductPage() {
    //DATA
    const { id } = useParams() //Destrutturo il mio hook (Avrà lo stesso nome della stringa che inserito nell'url)
    let navigate = useNavigate() //Creo una variabile  per salvare il mio hook, in maniera tale da assegnare dopo una rotta
    //USE STATE
    const [renderProduct, setRenderProduct] = useState(false) //Varole inziale del render del nostro prodotto 

    //USE EFFECT
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`) //Effettuo la chiamata Ajax all'api con il rispettivo id (che corrisponde all'id del prodotto selezioanto)

            .then(res => { //Gestisco la risposta
                //console.log(res.data);
                
                //console.log(res.data.id)
                //console.log(Number(id));
                if(Number(id) !== res.data.id) { //SE l'id del prodotto selezionato (In valore numerico) non  corrisponde all'id su cui viene fatta la chiamata API in quel moemento
                    //console.log('Non uguali');
                    navigate('/prodotti') //Renderizzo la l'utente automaticamente sulla pagina di prima
                    
                } else { //ALTRIMENTI imposto la mia variabile di stato uguale ai dati riecevuti dalla mia chiamata AJAX
                    setRenderProduct(res.data) 
                    
                    
                }
                
                
            }) 


    }, [])

    //Return anticipato 
    if(renderProduct === false) { //SE rendeProduct è falso 
        
        return ( //Renderizzo il componente 'AppLoading' che mostrerà un caricamento 
           <AppLoading />
        )
        
    } 
        
        
    
 
    
  
    //RETURN PRINCIPALE
    return (
        /* Main */
        <main>
            
            <div className="container">
                {/* Single card section */}
                <section className="row text-dark bg-white rounded">

                    {/* Image*/}
                    <div className="col-12 col-md-6 text-center d-flex justify-content-center flex-column align-items-center ">

                        <h1 className="my-3">{renderProduct.title}</h1>
                        <div className="img-box my-3">
                            <img src={renderProduct.image} alt="Porduct Image" />
                        </div>
                    </div>
                    
                    
                    {/* Description */}
                    <div className="col-12 col-md-6 d-flex flex-column gap-2 py-2">
                        <span className="fw-bold fs-5">Descrizione:</span>
                        <p className="fs-5">{renderProduct.description}</p>
                        <span className="text-danger fs-3 fw-bold align-self-center">€{renderProduct.price}</span>
                        <button className="btn btn-success buttonStyle">Acquista subito</button>

                    </div>
                
                </section>
            </div>
            {/* SINGLE PRODUCT CARD */}
            
        </main>
    )
}

