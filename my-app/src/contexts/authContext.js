import {createContext, useContext} from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
  const [value, setValue] = useState('NO')
  
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(){
  return useContext(AuthContext)
}