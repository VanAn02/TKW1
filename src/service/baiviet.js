import axios from "axios";
const baivietApi = axios.create({
    baseURL: 'https://localhost:7125/api/BaiViet'
});
export default {
    async getAll() {
        return await baivietApi.get();
    },
    async addData(data) {
        return await baivietApi.post('', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async updateData(id, data) {
        return await baivietApi.put(`${id}`, data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async deleteData(id){
        return await baivietApi.delete(`${id}`)
    }
    
}