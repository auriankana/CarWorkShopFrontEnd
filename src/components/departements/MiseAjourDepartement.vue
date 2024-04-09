<template>
    <main>
        <h1>Mettre à jour les infos de {{ departement.nom }}</h1>
        <form @submit.prevent="submit">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom" v-model="departement.nom">
            </div>
            <div class="mb-3">
                <label for="effectif" class="form-label">Effectif</label>
                <input type="text" class="form-control" id="effectif" v-model="departement.effectif">
            </div>
            <div class="mb-3">
                <label for="idEmplacement" class="form-label">ID de l'Emplacement</label>
                <input type="text" class="form-control" id="idEmplacement" v-model="departement.idEmplacement">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useDepartement from '@/services/serviceDepartement';

const route = useRoute()
const { id } = route.params
const { getDepartementById, updateDepartement } = useDepartement()

const departement = ref({
    nom: null,
    effectif: null,
    idEmplacement: null
})

const router = useRouter()

const submit = () => {
    updateDepartement(id, departement.value)
        .then(() => {
            router.push('/liste-departements')
        })
        .catch(() => {
            // Gérer les erreurs
        })
}

onBeforeMount(() => {
    getDepartementById(id)
        .then(res => departement.value = res.data)
        .catch(() => {
            // Gérer les erreurs
        })
})
</script>
