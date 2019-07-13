import Axios from "axios";

export const http = Axios.create ({
    baseURL: 'http://localhost:8080/',
})

export function isLogged () {
    //seria bom a gnt autenticar via rota
    if (!localStorage.getItem ('login') && !localStorage.getItem ('password')) {
        if (!sessionStorage.getItem ('login') && !sessionStorage.getItem ('password')) {
            return false;
        }
    }
    return true;
}