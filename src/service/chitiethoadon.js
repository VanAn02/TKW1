import axios from "axios";
const chitiethoadon=axios.create({
    baseURL:'https://localhost:2407/api/ThuNuoi'
})
export default{
    async getAll(){
        return await chitiethoadon.get();
    },
    async addData(data){
        return await chitiethoadon.post('',data,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
    },
    async updateData(id,data){
        return await chitiethoadon.put(`${id}`,data,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
    },
    async deleteData(id){
        return await chitiethoadon.delete(`${id}`);
    }
}