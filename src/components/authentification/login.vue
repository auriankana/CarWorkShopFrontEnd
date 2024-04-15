<template>
    <form @submit.prevent="connecter">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="infoLogin.email">
        </div>
        <div class="mb-3">
            <label for="motDePasse" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="mdp" v-model="infoLogin.motDePasse">
        </div>

        <button type="submit" class="btn btn-primary">Connecter</button>
    </form>
</template>

<script setup>
import { ref } from "vue";
import useLogin from '@/services/serviceAuth'
import { useRouter } from "vue-router";

const { login } = useLogin()
const infoLogin = ref({
    email: null,
    motDePasse: null
})

const router = useRouter()

const connecter = () => {
    login(infoLogin.value).then(res => {
        console.log('User', res.data)
        router.push('/')
    })
        .catch(err => console.log('Erreur de connexion', err))

}

</script>
