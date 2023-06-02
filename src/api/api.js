import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const busca = async(url,setDada) => {
    const respuesta = await api.get(url)
    setDada(respuesta.data)
}
