import {createContext,useContext} from 'react'
import { useSortFilter } from '../customHooks/useSortFilter';

const SortFilterContext=createContext(null)

const useSortFilterContext=()=>useContext(SortFilterContext)

const SortFilterContextProvider=({children})=>{
    const { sortFilterState, sortFilterDispatch }=useSortFilter()
    return(
       <SortFilterContext.Provider value={{sortFilterState, sortFilterDispatch}}>
           {children}
       </SortFilterContext.Provider>
    )

}
export {SortFilterContextProvider,useSortFilterContext}