import axios from "axios"

export const RegisterUserApi = async (RegisterData) => {
    try {
        const res = await axios.post("http://localhost:3000/api/v1/auth/register", RegisterData);
        console.log("Response", res)
    } catch (error) {
        console.log(error)
    }
}
