import { Link } from "react-router-dom";

export default function AppCard({cardId, cardImg, cardTitle, cardCategory, cardDescrption, cardPrice }) {



    return (
        //Tramite il componente Link rendo cliccabile come se fosse un tag 'a' l'intera pagina, soltanto che l'id dinamico corrisponde all'id della card cliccata.
        <Link to={`/prodotti/${cardId}`} className="card cards-sizing col-12 col-md-6 col-lg-4 bg-light position-relative text-decoration-none">
            
            {/* Images */}
            <div className="img-box container my-3">
                <img src={cardImg} alt="" className="card-img-top" />
                <img
                    className="product-logo"
                    src="https://media.licdn.com/dms/image/v2/D4D12AQGgquqlg98JKg/article-cover_image-shrink_720_1280/B4DZfGluLrG8AQ-/0/1751383467360?e=2147483647&v=beta&t=m_8eGKPxUO4gohM9Z4-svx6NIGZCOyfJhLY3tXNTkrk"
                    alt=""
                />
            </div>

            {/* Card Body */}
            
            <div className="card-body p-5">
                <h2 className="card-title fs-6">{cardTitle}</h2>
                <span className="text-body-tertiary sfw-bold">{cardCategory.toUpperCase()}</span>
                <p className="card-text d-none">{cardDescrption}</p>
            </div>

            {/* Card footer */}
            <div className="p-0 text-center">
                <ul className="list-group text-center">
                    <li className="list-group-item">€{cardPrice.toFixed(2)}</li>
                    <li className="list-group-item">rating</li>
                </ul>

                {/* Buy button */}
                <button className="btn buttonStyle btn-warning my-3">Aggiungi al carrello</button>
            </div>

        </Link>
       /* Single Card */
        

    )
}