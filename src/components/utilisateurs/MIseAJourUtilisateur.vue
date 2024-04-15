<template>
    <main>
        <h1>Mettre a jour les infos de {{ utilisateur.prenom +' '+utilisateur.nom }}</h1>
        <form @submit.prevent="soumettre" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input type="text" class="form-control" id="prenom" v-model="utilisateur.prenom">
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom" v-model="utilisateur.nom">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="utilisateur.email">
            </div>
            <div class="mb-3">
                <label for="motDePasse" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="mdp" v-model="utilisateur.motDePasse">
            </div>
            <div class="mb-3">
                <label for="dateDeNaissance" class="form-label">Date de naissance</label>
                <input type="date" class="form-control" id="dateDeNaissance" v-model="utilisateur.dateDedateDeNaissance">
            </div>
            <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input type="file" class="form-control" id="photo" @change="{ }">
            </div>

            <!-- Ajout des relations  -->

            <div class="mb-3">
                <label for="department" class="form-label">Departements</label>
                <select id="department" class="form-select" v-model="utilisateur.idDepartment">
                    <option :selected="utilisateur.idDepartment" v-for="department in departments" :value="department.idDepartment"
                        :key="department.idDepartment">{{ department.nom }}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="role" class="form-label">Roles</label>
                <select id="role" class="form-select" v-model="utilisateur.roleId">
                    <!-- <option :selected="utilisateur.roleId" v-for="role in roles" :value="role.id" :key="role.id">{{ role.titre }}</option> -->
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>

</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useUtilisateur from '@/services/serviceUtilisateur';
import useDepartment from '@/services/serviceDepartement'
import useRole from '@/services/serviceRole'

const { getUtilisateurById } = useUtilisateur()
const { getAllRoles } = useRole()
const { getAllDepartments } = useDepartment()

const router = useRouter()
const route = useRoute()
const { id } = route.params
const utilisateur = ref({
    nom: null,
    prenom: null,
    email: null,
    motDePasse: null,
    photo: null,
    dateDeNaissance: null,
    idDepartment: null,
    idRole: null
})

const roles = ref([])
const departments = ref([])

//Pour les formulaires  contenant les fichiers/photos
const formData = new FormData()
const soumettre = () => {

    for (let clef in utilisateur.value) {
        formData.append(clef, utilisateur.value[clef])
    }
    console.log('utilisateur', formData)
}
onBeforeMount(() => {
    getUtilisateurById(id)
        .then(res => utilisateur.value = res.data)
        .catch(() => { })

    getAllDepartments()
        .then(res => departments.value = res.data)
        .catch(err => console.log('Erreur liste departments', err))

    getAllRoles()
        .then(res => roles.value = res.data)
        .catch(err => console.log('Erreur liste roles', err))

})
</script>
