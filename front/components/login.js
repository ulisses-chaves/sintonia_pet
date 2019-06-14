import { LoginTemplate } from "../templates/login-template.js";


const Login = Vue.component ('login', {
    template: LoginTemplate,
    beforeMount () {
        document.body.style="background: url(public/img/dogg60.jpg) no-repeat center top fixed; background-attachment: fixed; background-size: cover;";
    },
    beforeDestroy () {
        document.body.style="background: none"
    }
})

export { Login }