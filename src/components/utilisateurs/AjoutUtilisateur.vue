<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="prenom" class="form-label">Prenom</label>
            <input type="text" class="form-control" id="prenom" v-model="utilisateur.prenom">
        </div>
        <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="utilisateur.nom">
        </div>
        <div class="mb-3">
            <label for="adresse" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="adresse" v-model="utilisateur.adresse">
        </div>        
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="utilisateur.email">
        </div>
        <div class="mb-3">
            <label for="motDePasse" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="motDePasse" v-model="utilisateur.motDePasse">
        </div>
        <div class="mb-3">
            <label for="dateDeNaissance" class="form-label">Date de naissance</label>
            <input type="date" class="form-control" id="dateDeNaissance" v-model="utilisateur.dateDeNaissance">
        </div>
        <div class="mb-3">
            <label for="photo" class="form-label">Photo</label>
            <input type="file" class="form-control" id="photo" @change="{ addPhoto }">
        </div>


        <!-- Les clefs etrangeres -->
        <div class="mb-3">
            <label for="departement" class="form-label">Departements</label>
            <select class="form-select form-select-lg mb-3" id="departement" v-model="utilisateur.departementIdDepartment">
                <!-- <option selected>Choisir un departement</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> -->
                <option v-for="departement in departmentList" :value="departement.idDepartment" :key="departement.idDepartment"
                    :selected="utilisateur.idDepartment === departement.idDepartment">{{ departement.nom }}</option>
               
            </select>
        </div>
        <div class="mb-3">
            <label for="role" class="form-label">Roles</label>
            <select class="form-select form-select-lg mb-3" id="role" v-model="utilisateur.roleIdRole">
                <!-- <option selected>Choisir un role</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> -->
                    
                <!-- // Value permet ici la communication avec la base de donnee 
                    raison pour la quelle on doit mettre la cle qui lie les deux 
                modeles-->
                <option v-for="role in roleList" 
                :value="role.idRole" 
                :key="role.idRole"
                :selected="utilisateur.roleIdRole === role.idRole">{{ role.titre }}
            </option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import {onBeforeMount, ref } from 'vue'
// import useutilisateur from '../../services/serviceUtilisateur'
import useUtilisateur from '@/services/serviceUtilisateur' // @ stand for "../.." or "../" depends of the link which lead us to the function we want
import { useRouter } from 'vue-router';
import useRole from '@/services/serviceRole'

const { addUtilisateur } = useUtilisateur()
// const { getAllDepartements } = useDepartement()
const { getAllRoles } = useRole()

const router = useRouter()

// const departmentList = ref([])
const roleList = ref([])

const utilisateur = ref({
    nom: null,
    prenom: null,
    email: null,
    motDePasse: null,
    dateDeNaissance: null,
    photo: null,
    // departementIdDepartment: null,
    roleIdRole: null
})

const formData = new FormData()

const submit = () => {
    console.log('utilisateur', utilisateur.value)

    for (let champ in utilisateur.value){
        formData.append(champ,utilisateur.value[champ])
    }
    console.log("Voici la formData: ",formData)

    addUtilisateur(formData)
        .then(res => {
            console.log(res)
            router.push('/')
        })
        .catch(err => console.log('erreur', err))
}

const addPhoto = element =>{
    utilisateur.value.photo = element.target.files[0]
}

// onBeforeMount(() => {
//     getAllDepartements()
//         .then(res => departmentList.value = res.data)
//         .catch(err => console.log('Erreur liste departments', err))
// })

onBeforeMount(() => {
    getAllRoles()
        .then(res => roleList.value = res.data)
        .catch(err => console.log('Erreur liste roles', err))
})

</script>
