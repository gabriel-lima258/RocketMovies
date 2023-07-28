import {createContext, useContext, useState, useEffect} from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [data, setData] = useState({}); // estado para guardar informações do user

    async function signIn({email, password}){

     try {
        const response = await api.post("/sessions", {email, password});
        const {user, token} = response.data // pegando somente os dados que me interessa

        localStorage.setItem("@rocketmovies:user", JSON.stringify(user)); // a chave e o valor passado
        localStorage.setItem("@rocketmovies:token", token); // para o token

        // passando o token do usuário para todas as requisições
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({user, token}); 

     } catch(error) {
        if(error.response){
            alert(error.response.data.message);
        } else {
            alert("Não foi possível realizar o login.");
        }
     }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user"); // pegando a chave do local
        const token = localStorage.getItem("@rocketmovies:token"); 

        if(user && token){
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({token, user: JSON.parse(user)});
        }
        
    }, []);

    return (
    <AuthContext.Provider value={{signIn, user: data.user}}> 
        {children}
    </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context;
}

export {AuthProvider, useAuth};