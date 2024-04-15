<template>
    <h1>Liste des utilisateurs</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Date de naissance</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="utilisateur in listeUtilisateur" :key="utilisateur.idUtilisateur">
                <td>{{ utilisateur.prenom }}</td>
                <td>{{ utilisateur.nom }}</td>
                <td>{{ utilisateur.adresse }}</td>
                <td>{{ utilisateur.dateDeNaissance }}</td>
                <td>{{ utilisateur.email }}</td>
                <td><button class="btn btn-primary">Update</button>
                    <button class="btn btn-success" @click="goToProfile(utilisateur.idUtilisateur)">Details</button> 
                    <button class="btn btn-danger" @click="supprimer(utilisateur.idUtilisateur)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" @click="goToAddUtilisateur">Ajouter une personne</button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import useUtilisateur from '../../services/serviceUtilisateur'
const { getAllUtilisateurs, deleteUtilisateur } = useUtilisateur()

const listeUtilisateur = ref([])
const router = useRouter()

const supprimer = idUtilisateur => {
    deleteUtilisateur(idUtilisateur)
        .then((res) => {
            console.log('suppression', res)
            getAllUtilisateurs()
                .then((res) => listeUtilisateur.value = res.data)
                .catch(err => console.log(err))
        })

        .catch(err => console.log(err))
}

onBeforeMount(() => {
    getAllUtilisateurs()
        .then((res) => listeUtilisateur.value = res.data)
        .catch(err => console.log(err))
})

const goToAddUtilisateur = () => {
    router.push('/AjoutUtilisateur')
}

const goToProfile = idUtilisateur => {
    router.push(`/profile/${idUtilisateur}`)
}

</script>