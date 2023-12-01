import axios from "axios";
const dattourApi = axios.create({
    baseURL: 'https://localhost:7125/api/BaiViet'
});
export default {
    async getAll() {
        return await dattourApi.get();
    },
    async addData(data) {
        return await dattourApi.post('', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async updateData(id, data) {
        return await dattourApi.put(`${id}`, data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async deleteData(id){
        return await dattourApi.delete(`${id}`)
    }
    
}