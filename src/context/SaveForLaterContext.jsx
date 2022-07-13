import { useReducer, createContext, useContext } from "react"

const SaveForLaterContext = createContext()

const updateSaveLaterFunc = (state,action) => {
    switch(action.type)
    {
        case "ADD_PRODUCT_TO_SAVE_LATER" : 
            {
                const index = state.findIndex((productInSaveForLater) => productInSaveForLater.id === action.payload.id)
     
                return index!==-1 
                ? [...state]
                : [...state, { ...action.payload}]
            }
        case "REMOVE_PRODUCT_TO_SAVE_LATER" : 
            {
                let newSaveForLaterList = state.filter(product=>product.id!==action.payload.id)
                return newSaveForLaterList
            }
        default : return [...state] 
    }
}

const SaveForLaterContextProvider = ({children}) => {
    const [saveForLater, dispatchSaveForLater] = useReducer(updateSaveLaterFunc,[])

    return (
        <SaveForLaterContext.Provider value={{saveForLater, dispatchSaveForLater}}>
            {children}
        </SaveForLaterContext.Provider>
    )
}

let useSaveForLater = () => useContext(SaveForLaterContext)

export { useSaveForLater, SaveForLaterContextProvider }