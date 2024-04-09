<template>
    <h1>Liste des emplacements</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Adresse</th>
                <th>Code Postal</th>
                <th>Effectif</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="emplacement in listeEmplacements" :key="emplacement.id">
                <td>{{ emplacement.adresse }}</td>
                <td>{{ emplacement.codePostal }}</td>
                <td>{{ emplacement.effectif }}</td>
                <td>
                    <button class="btn btn-primary">Update</button>
                    <button class="btn btn-success" @click="goToDetails(emplacement.id)">Details</button>
                    <button class="btn btn-danger" @click="onDeleteEmplacement(emplacement.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" @click="goToAddEmplacement">Ajouter un emplacement</button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import useEmplacement from '../../services/serviceEmplacement'

const { getAllEmplacements, deleteEmplacement } = useEmplacement()

const listeEmplacements = ref([])
const router = useRouter()

const onDeleteEmplacement = id => {
    deleteEmplacement(id)
        .then(() => {
            getAllEmplacements()
                .then((res) => listeEmplacements.value = res.data)
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

onBeforeMount(() => {
    getAllEmplacements()
        .then((res) => listeEmplacements.value = res.data)
        .catch(err => console.log(err))
})

const goToAddEmplacement = () => {
    router.push('/ajout-emplacement')
}

const goToDetails = id => {
    router.push(`/emplacement/${id}`)
}

</script>
