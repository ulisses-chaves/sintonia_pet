import Axios from "axios";

export const http = Axios.create ({
    baseURL: 'https://aw-sintonia-pet-api.herokuapp.com/',
})

export function isLogged () {
    if (!localStorage.getItem ('login') && !localStorage.getItem ('password')) {
        if (!sessionStorage.getItem ('login') && !sessionStorage.getItem ('password')) {
            return false;
        }
    }
    return true;
}

export function getLogin () {
    if (!localStorage.getItem ('login')) {
        return sessionStorage.getItem ('login')
    }
    return localStorage.getItem ('login')
}

export function getSenha () {
    if (!localStorage.getItem ('password')) {
        return sessionStorage.getItem ('password')
    }
    return localStorage.getItem ('password')
}