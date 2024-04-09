<template>
    <main>
        <h1>Mettre à jour les infos de {{ emplacement.adresse }}</h1>
        <form @submit.prevent="submit" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="adresse" class="form-label">Adresse</label>
                <input type="text" class="form-control" id="adresse" v-model="emplacement.adresse">
            </div>
            <div class="mb-3">
                <label for="codePostal" class="form-label">Code Postal</label>
                <input type="text" class="form-control" id="codePostal" v-model="emplacement.codePostal">
            </div>
            <div class="mb-3">
                <label for="effectif" class="form-label">Effectif</label>
                <input type="text" class="form-control" id="effectif" v-model="emplacement.effectif">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useEmplacement from '@/services/serviceEmplacement';

const route = useRoute()
const { id } = route.params
const { getEmplacementById, updateEmplacement } = useEmplacement()

const emplacement = ref({
    adresse: null,
    codePostal: null,
    effectif: null
})

const router = useRouter()

const submit = () => {
    updateEmplacement(id, emplacement.value)
        .then(() => {
            router.push('/liste-emplacements')
        })
        .catch(() => {
            // Gérer les erreurs
        })
}

onBeforeMount(() => {
    getEmplacementById(id)
        .then(res => emplacement.value = res.data)
        .catch(() => {
            // Gérer les erreurs
        })
})
</script>
