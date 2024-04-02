// Read Me les services is when we have an interaction with the server

import axios from "axios";

const useUtilisateur = () => {
    //Creer une fonction recupere la liste des etudiants
    const getAllUtilisateurs = async () => {
        const utilisateurs = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateurs`)
        console.log('La liste', utilisateurs.data.data)
        return utilisateurs.data // Pour retirer la deuxieme couche de Data cree par Axios
    }
    const deleteUtilisateur = async (idUtilisateur) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${idUtilisateur}`)
    }

    const getUtilisateurById = async (idUtilisateur) => {
        const utilisateur = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${idUtilisateur}`)
        return utilisateur.data
    }
    const addUtilisateur = async (utilisateur) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/utilisateurs`, utilisateur)
    }

    return { getAllUtilisateurs, deleteUtilisateur, getUtilisateurById, addUtilisateur }
}

export default useUtilisateur