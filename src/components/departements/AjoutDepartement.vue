<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="department.nom">
        </div>
        <div class="mb-3">
            <label for="effectif" class="form-label">Effectif</label>
            <input type="number" class="form-control" id="effectif" v-model="department.effectif">
        </div>
        <div class="mb-3">
            <label for="idEmplacement" class="form-label">ID de l'Emplacement</label>
            <input type="number" class="form-control" id="idEmplacement" v-model="department.idEmplacement">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import useDepartment from '@/services/serviceDepartment'
import { useRouter } from 'vue-router';

const { addDepartment } = useDepartment()

const router = useRouter()

const department = ref({
    nom: null,
    effectif: null,
    idEmplacement: null
})

const submit = () => {
    console.log('department', department.value)
    addDepartment(department.value)
        .then(res => {
            console.log(res)
            router.push('/')
        })
        .catch(err => console.log('erreur', err))
}
</script>
