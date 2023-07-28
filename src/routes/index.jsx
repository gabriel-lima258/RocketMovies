import {BrowserRouter} from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import {AppRoutes} from './app.routes'
import {AuthRoutes} from './auth.routes'

export function Routes(){
    const {user} = useAuth(); // pegando user dentro do hook, se ele existir passa a rota app, senão auth

    return(
        <BrowserRouter>
            {user ? <AppRoutes/> : <AuthRoutes/>} 
        </BrowserRouter>
    )
}
