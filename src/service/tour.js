import axios from "axios";
const tourApi = axios.create({
    baseURL: 'https://localhost:7125/api/Tour'
});
export default {
    async getAll() {
        return await tourApi.get();
    },
    async addData(data) {
        return await tourApi.post('', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async updateData(id, data) {
        return await tourApi.put(`${id}`, data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async deleteData(id){
        return await tourApi.delete(`${id}`)
    }
    
}