import axios from 'axios'
import {BACKEND_API_KEY, BACKEND_URL} from 'react-native-dotenv'

const loginUser = (email: string, password: string) => {
    return axios.post(
        `${BACKEND_URL}/users/login`,
        {
            email: email,
            password: password
        },
        {
            headers: {
                'x-api-key': BACKEND_API_KEY
        }
    })
}

export default loginUser