<template>
    <h1>Liste des départements</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Effectif</th>
                <th>ID de l'Emplacement</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="departement in listeDepartements" :key="departement.id">
                <td>{{ departement.nom }}</td>
                <td>{{ departement.effectif }}</td>
                <td>{{ departement.idEmplacement }}</td>
                <td>
                    <button class="btn btn-primary">Update</button>
                    <button class="btn btn-success" @click="goToDetails(departement.id)">Details</button>
                    <button class="btn btn-danger" @click="deleteDepartement(departement.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" @click="goToAddDepartement">Ajouter un département</button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import useDepartement from '../../services/serviceDepartement'

const { getAllDepartements, deleteDepartement } = useDepartement()

const listeDepartements = ref([])
const router = useRouter()

const ondeleteDepartement = id => {
    deleteDepartement(id)
        .then(() => {
            getAllDepartements()
                .then((res) => listeDepartements.value = res.data)
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

onBeforeMount(() => {
    getAllDepartements()
        .then((res) => listeDepartements.value = res.data)
        .catch(err => console.log(err))
})

const goToAddDepartement = () => {
    router.push('/ajout-departement')
}

const goToDetails = id => {
    router.push(`/departement/${id}`)
}

</script>
