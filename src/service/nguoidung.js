import axios from "axios";
const nguoidungApi = axios.create({
    baseURL: 'https://localhost:7125/api/NguoiDung'
});
export default {
  
   async getAll() {
    return await nguoidungApi.get();
},
async addData(data) {
    return await nguoidungApi.post('', data,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
},
async updateData(id, data) {
    return await nguoidungApi.put(`${id}`, data,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
},
async deleteData(id){
    return await nguoidungApi.delete(`${id}`)
}

}