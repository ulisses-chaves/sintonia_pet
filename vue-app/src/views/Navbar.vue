<template>
    <div style= "box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5)">
        <nav id="altura-nav" style="background-image: linear-gradient(to bottom, #fdad00 , #fdc536);" class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a href="/">
                    <img style="height: 65px;" src="../../public/assets/logo-titulo branco.png" alt="">
                </a>
                <button style="background: #7e4732" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSite">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mx-2">
                            <router-link style="color: #7e4732;" class="btn btn-outline-light nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item active mx-2">
                            <router-link style="color: #7e4732" class="btn btn-outline-light nav-link" to="cadastro">Cadastro</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>
