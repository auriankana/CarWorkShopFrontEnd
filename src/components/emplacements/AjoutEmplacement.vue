<template>
    <form @submit.prevent="submit">
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
            <input type="number" class="form-control" id="effectif" v-model="emplacement.effectif">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import useEmplacement from '@/services/serviceEmplacement'
import { useRouter } from 'vue-router';

const { addEmplacement } = useEmplacement()

const router = useRouter()

const emplacement = ref({
    adresse: null,
    codePostal: null,
    effectif: null
})

const submit = () => {
    console.log('emplacement', emplacement.value)
    addEmplacement(emplacement.value)
        .then(res => {
            console.log(res)
            router.push('/')
        })
        .catch(err => console.log('erreur', err))
}
</script>
