<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="prenom" class="form-label">Prenom</label>
            <input type="text" class="form-control" id="prenom" v-model="etudiant.prenom">
        </div>
        <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="etudiant.nom">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="etudiant.email">
        </div>
        <div class="mb-3">
            <label for="mdp" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="mdp" v-model="etudiant.mot_de_passe">
        </div>
        <div class="mb-3">
            <label for="date-naissance" class="form-label">Date de naissance</label>
            <input type="date" class="form-control" id="date-naissance" v-model="etudiant.date_de_naissance">
        </div>
        <div class="mb-3">
            <label for="photo" class="form-label">Photo</label>
            <input type="file" class="form-control" id="photo" @change="{ }">
        </div>


        <!-- Les clefs etrangeres -->
        <div class="mb-3">
            <label for="departement" class="form-label">Departements</label>
            <select class="form-select form-select-lg mb-3" id="departement" v-model="etudiant.departmentId">
                <!-- <option selected>Choisir un departement</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> -->
                
            </select>
        </div>
        <div class="mb-3">
            <label for="role" class="form-label">Roles</label>
            <select class="form-select form-select-lg mb-3" id="role" v-model="etudiant.roleId">
                <!-- <option selected>Choisir un role</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> -->
                    
                <!-- // Value permet ici la communication avec la base de donnee 
                    raison pour la quelle on doit mettre la cle qui lie les deux 
                modeles-->
                <option v-for="role in roleList" 
                :value="idRole" 
                :key="idRole"
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
// import useEtudiant from '../../services/serviceUtilisateur'
import useEtudiant from '@/services/serviceUtilisateur' // @ stand for "../.." or "../" depends of the link which lead us to the function we want
import { useRouter } from 'vue-router';
const { addStudent } = useEtudiant()

const router = useRouter()



const utilisateur = ref({
    nom: null,
    prenom: null,
    email: null,
    mot_de_passe: null,
    date_de_naissance: null,
    photo: null,
    departmentId: null,
    roleId: null
})

const submit = () => {
    console.log('utilisateur', utilisateur.value)
    addUtilisateur(utilisateur.value)
        .then(res => {
            console.log(res)
            router.push('/')
        })
        .catch(err => console.log('erreur', err))
}

const addPhoto = element =>{
    utilisateur.value.photo = e.target.files
}


</script>
