import { createContext,useState , useContext,useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () =>useContext(MovieContext)

export const MovieProvider = ({children}) => {

  const [favorites , setFavs] = useState([])
  useEffect(()=> {
    con
  })
  return <MovieContext.Provider>
    {children}  
  </MovieContext.Provider>
  
}