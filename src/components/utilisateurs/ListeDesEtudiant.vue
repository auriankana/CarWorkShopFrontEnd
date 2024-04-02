<template>
    <h1>Liste des etudiants</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Date de naissance</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="etudiant in listeEtudiant" :key="etudiant.id">
                <td>{{ etudiant.prenom }}</td>
                <td>{{ etudiant.nom }}</td>
                <td>{{ etudiant.date_de_naissance }}</td>
                <td>{{ etudiant.email }}</td>
                <td><button class="btn btn-primary">Update</button>
                    <button class="btn btn-success" @click="goToProfile(etudiant.id)">Details</button>
                    <button class="btn btn-danger" @click="supprimer(etudiant.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" @click="goToAddStudent">Ajouter une personne</button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import useEtudiant from '../../services/serviceEtudiant'
const { getAllStudents, deleteStudent } = useEtudiant()

const listeEtudiant = ref([])
const router = useRouter()

const supprimer = id => {
    deleteStudent(id)
        .then((res) => {
            console.log('suppression', res)
            getAllStudents()
                .then((res) => listeEtudiant.value = res.data)
                .catch(err => console.log(err))
        })

        .catch(err => console.log(err))
}

onBeforeMount(() => {
    getAllStudents()
        .then((res) => listeEtudiant.value = res.data)
        .catch(err => console.log(err))
})

const goToAddStudent = () => {
    router.push('/ajout-etudiant')
}

const goToProfile = id => {
    router.push(`/profile/${id}`)
}

</script>
<style></style>
../../services/serviceUtilisateur