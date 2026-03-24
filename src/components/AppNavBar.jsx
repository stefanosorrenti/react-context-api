//IMPORTS
import { NavLink } from "react-router-dom"
import { useState, useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"
export default function AppNavBar() {

    //DATA
    const {budgetMode, setBudgetMode} = useContext(BudgetContext)
    //USE STATE
    const [buttonTitle, setButtonTitle] = useState('Attiva modalità budget')

    function setButtonMode () {
        setBudgetMode(!budgetMode)
        if(budgetMode) {
            setButtonTitle('Disattiva modalità budget')
        } else {
            setButtonTitle('Attiva modalità budget')
        }
        
        //console.log(budgetMode);
        
    }
    return (


        /* NavBar */
        <nav className="py-3 d-flex flex-column justify-content-center align-items-center gap-4">
            <a className="navbar-brand" href="#">
                <img src="https://media.licdn.com/dms/image/v2/D4D12AQGgquqlg98JKg/article-cover_image-shrink_720_1280/B4DZfGluLrG8AQ-/0/1751383467360?e=2147483647&v=beta&t=m_8eGKPxUO4gohM9Z4-svx6NIGZCOyfJhLY3tXNTkrk" alt="" />
            </a>
            {/* Navbar Item */}
            <ul className="nav nav-pills justify-content-center">

                <li className="nav-item">
                    <NavLink className="nav-link" to="/info" >Chi siamo?</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="./prodotti" className="nav-link">Scopri i nostri prodotti</NavLink>
                </li>

            </ul>
            <button className={budgetMode ? 'btn btn-success' : 'btn btn-danger'} onClick={setButtonMode}>{buttonTitle}</button>

        </nav>

    )
}