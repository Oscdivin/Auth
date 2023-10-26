import axios from "axios"

const URL:string = "https://dirttoschool.onrender.com"

export const OpenAcc = async (data:any)=>{
    try {
        return await axios.post(`${URL}/api/creat/`,data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}