import axios from "axios";
const hoadon = axios.create({
    baseURL:'https://localhost:2407/api/HoaDon'
});
export default{
    async checkOut(data){
        return await hoadon.post('',data);
    },
    async getById(id){
        return await hoadon.get(`${id}`);
    },
    async getChiTietById(id){
        return await hoadon.get('/getChiTiet/'+id);
    },
    async huyDon(id){
        return await hoadon.delete(`${id}`);
    }
}