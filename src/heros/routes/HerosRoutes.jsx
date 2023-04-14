import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { DcPage } from "../pages/DcPage"
import { MarvelPage } from "../pages/MarvelPage"
import { SearchPage } from "../pages/SearchPage"
import { HeroPage } from "../pages/HeroPage"
import { getHeros } from "../helpers/getHeros"

export const HerosRoutes = () => {

  return (
    <>      
        <NavBar />
        <div className="container pt-4">
            <Routes>
                <Route path="marvel" element={ <MarvelPage /> } />
                <Route path="dc" element={ <DcPage /> } />
                <Route path="search" element={ <SearchPage /> } />
                <Route path="hero" element={ <HeroPage /> } />
                <Route path="hero/:id" element={ <HeroPage /> } />
                <Route path="/" element={ <Navigate to="marvel" /> } />
            </Routes>
        </div>
    </>
  )
}
