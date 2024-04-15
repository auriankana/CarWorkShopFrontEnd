import axios from 'axios'

const useAuth = () => {
    const login = async (loginInfo) => {
        const infoLogin = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, loginInfo)
        return infoLogin.data

    }

    return { login }
}

export default useAuth