// Notre copie d'axios
import http from './auth/axiosAPI'

const useDepartement = () => {
    const getAllDepartements = async () => {
        const departements = await http.get(`/departements`)
        return departements.data
    }

    return { getAllDepartements }
}

export default useDepartement
