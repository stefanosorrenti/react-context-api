//IMPORTS
import { MainPageLayout } from "./components/MainPageLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//PAGES
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import ErrorPage from "./pages/ErrorPage";
function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route element= {<MainPageLayout/>}>

          <Route index element= { <MainPage /> } /> 
          <Route path="/info" element= { <InfoPage /> } />
          <Route path="/prodotti" element= { <Products /> } />
          <Route path="/prodotti/:id" element= { <SingleProductPage /> } /> {/* Imposto  la mia rotta dinamica*/}
          <Route path="*" element = { <ErrorPage /> } /> {/* Imposto una rotto nel caso venisse digiato un URL che non è compreso tra le mie Route */}
        </Route>  
              

      </Routes>

    </BrowserRouter>
  )
}

export default App
