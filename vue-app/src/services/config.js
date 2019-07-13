import Axios from "axios";

export const http = Axios.create ({
    baseURL: 'http://192.168.25.213:8080/',
})

export function isLogged () {
    if (!localStorage.getItem ('login') && !localStorage.getItem ('password')) {
        if (!sessionStorage.getItem ('login') && !sessionStorage.getItem ('password')) {
            return false;
        }
    }
    return true;
}