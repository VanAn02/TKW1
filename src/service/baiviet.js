import axios from "axios";
const baiviet = axios.create({
    baseURL: 'https://localhost:7125/api/BaiViet'
});
export default {
    async getAll() {
        return await baiviet.get();
    },
    async getById(id){
        return await baiviet.get(`${id}`)

    },
    async addData(data) {
        return await baiviet.post('', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async updateData(id, data) {
        return await baiviet.put(`${id}`, data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async deleteData(id){
        return await baiviet.delete(`${id}`)
    }
    
}