// Notre copie d'axios
import http from './auth/axiosAPI'

const useEmplacement = () => {
    const getAllEmplacements = async () => {
        const emplacements = await http.get(`/emplacements`)
        return emplacements.data
    }

    return { getAllEmplacements }
}

export default useEmplacement
