//IMPORTS
import { Commet } from "react-loading-indicators"
export default function AppLoading() {

    return (
        /* MAIN */
        <main>

            <div className="loading-circle">
                {/* 'Barra di caricamento' */}
                <Commet color="#fcfcfc" size="large" text="" textColor="#ffffff" />
            </div>

        </main>
    )
}