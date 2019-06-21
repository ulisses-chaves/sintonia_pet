<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-5">
                <div class="card p-3 mb-3">
                    <div class="card-body mt-3">
                        <h2 style="color: #fdc536" class="card-title mt-2">Entre em contato</h2>
                        <h6 class="card-subtitle my-4 text-muted">Mande uma mensagem pra gente contando a sua dificuldade ou sugestão.</h6>
                        <form action="">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="nome" placeholder="Nome" required>
                                    </div>
                                </div>
                                <div class="col-md-7">   
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email" required>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="msg" rows="3" placeholder="Escreva sua mensagem" required></textarea>
                            </div>
                            <button href="#" class="btn btn-link card-link mb-3">
                                <img style="width: 18px" src="../../public/assets/email.png" alt="">
                                <span style="vertical-align: middle" class="ml-1">Enviar mensagem</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7902.876456188433!2d-34.847720896359014!3d-7.953583311003207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1560227250682!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contato'
}
</script>
