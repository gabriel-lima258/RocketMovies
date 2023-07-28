import {createContext, useContext, useState, useEffect} from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [data, setData] = useState({}); // estado para guardar informações do user

    function signOut(){
      localStorage.removeItem("@rocketmovies:user"); // removendo a chave do local
      localStorage.removeItem("@rocketmovies:token"); 

      setData({});
    }

    async function signIn({email, password}){

     try {
        const response = await api.post("/sessions", {email, password});
        const {user, token} = response.data // pegando somente os dados que me interessa

        localStorage.setItem("@rocketmovies:user", JSON.stringify(user)); // a chave e o valor passado
        localStorage.setItem("@rocketmovies:token", token); // para o token

        // passando o token do usuário para todas as requisições
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setData({user, token}); 

     } catch(error) {
        if(error.response){
            alert(error.response.data.message);
        } else {
            alert("Não foi possível realizar o login.");
        }
     }
    }

    async function updateProfile({user, avatarFile}){
        try{

        if(avatarFile){ // se existe um arquivo
            const fileUploadForm = new FormData(); // criando em um formato de um novo arquivo
            fileUploadForm.append('avatar', avatarFile); // append adiciona um novo arquivo

            const response = await api.patch("/users/avatar", fileUploadForm); // enviando o arquivo para dentro do endereço api
            user.avatar = response.data.avatar; // atualizando o arquivo
        }

        await api.put("/users", user);
        localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

        setData({user, token: data.token})

        }catch(error) {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil.");
            }
         }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user"); // pegando a chave do local
        const token = localStorage.getItem("@rocketmovies:token"); 

        if(user && token){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({token, user: JSON.parse(user)});
        }
        
    }, []);

    return (
    <AuthContext.Provider value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user
        }}> 
        {children}
    </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context;
}

export {AuthProvider, useAuth};