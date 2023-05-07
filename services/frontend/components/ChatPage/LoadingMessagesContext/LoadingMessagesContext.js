import { createContext, useState } from "react";


export const LoadingMessagesContext = createContext([])



const LoadingMessagesProvider = ({children}) => {
    const [loadingMessages, setLoadingMessages] = useState([])
    

    return (
        <>
            <LoadingMessagesContext.Provider value={{loadingMessages, setLoadingMessages}}>
                {children}
            </LoadingMessagesContext.Provider>
        </>
    );
}

export default LoadingMessagesProvider;