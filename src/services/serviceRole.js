import axios from 'axios'

const useRole = () => {
    const getAllRoles = async () => {
        const roles = await axios.get(`${import.meta.env.VITE_BASE_URL}/roles`)
        return roles.data
    }

    const deleteRole = async (idRole) => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/roles/${idRole}`)
    }

    const addUtilisateur = async (role) => {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/roles`, role)
    }
    return { getAllRoles, deleteRole, addUtilisateur}
}

export default useRole