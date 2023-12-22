import axios from "axios";
const dattour = axios.create({
    baseURL: 'https://localhost:7125/api/BaiViet'
});
export default {
    async getAll() {
        return await dattour.get();
    },
    async addData(data) {
        return await dattour.post('', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async updateData(id, data) {
        return await dattour.put(`${id}`, data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async deleteData(id){
        return await dattour.delete(`${id}`)
    }
    
}