import React, { createContext, useState} from "react";
const MyContext = createContext();
export const MyProvider = ({children})=>{
    const [sharedState, setSharedState] = useState(false);
    return (
        <MyContext.Provider value={{sharedState, setSharedState}}>
            {children}
        </MyContext.Provider>
    );
}
export default MyContext;