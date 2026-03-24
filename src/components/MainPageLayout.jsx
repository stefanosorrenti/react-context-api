//IMPORTS
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import { Outlet } from "react-router-dom"
export function MainPageLayout() {



    return (
        <>
            <AppHeader />
            <Outlet />
            {/* <AppFooter /> */}
        </>
    )
}