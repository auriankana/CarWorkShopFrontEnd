<template>
    <div class="card" style="width: 18rem;">
        <img src=".." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Prenom: {{ utilisateur.prenom }}</p>
            <p class="card-text">Nom: {{ utilisateur.nom }}</p>
            <p class="card-text">Adresse: {{ utilisateur.adresse }}</p>
            <p class="card-text">Age: {{ utilisateur.dateDeNaissance }}</p>
            <p class="card-text">Email {{ utilisateur.email }}</p>

        </div>
    </div>
</template>

<script setup>
import useUtilisateur from "@/services/serviceUtilisateur"
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const { idUtilisateur } = route.params

const utilisateur = ref({})


const { getUtilisateurById } = useUtilisateur()
onBeforeMount(() => {
    getUtilisateurById(idUtilisateur).then((res) => {
        console.log('utilisateur a voir',res)
        utilisateur.value = res.data})
})

</script>