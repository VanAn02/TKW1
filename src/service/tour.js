import axios from "axios";
const tour = axios.create({
    baseURL: 'https://localhost:7125/api/Tour'
});
export default {
    async getAll() {
        return await tour.get();
    },
    async getById(id){
        return await tour.get(`${id}`)

    },
    async addData(data) {
        return await tour.post('', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async updateData(id, data) {
        return await tour.put(`${id}`, data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async deleteData(id){
        return await tour.delete(`${id}`)
    },
    
    
}