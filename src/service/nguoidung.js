import axios from "axios";
const nguoidung = axios.create({
    baseURL: 'https://localhost:7125/api/NguoiDung'
});
export default {

    async getAll() {
        return await nguoidung.get();
    },
    async getById(id) {
        return await nguoidung.get(`${id}`)

    },
    async addData(data) {
        return await nguoidung.post('/AddUser', data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async updateData(id, data) {
        return await nguoidung.put('/updateUser/'+id, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    async Token(token) {
        return await nguoidung.post(`/DecodeToken?token=${token}`);
    },
    async deleteData(id) {
        return await nguoidung.delete(`${id}`)
    },
    async Login(data){
        return await nguoidung.post('/login',data);
    },
    async Resigter(data){
        console.log(data)
        return await nguoidung.post('/resigter',data);
    }

    
}