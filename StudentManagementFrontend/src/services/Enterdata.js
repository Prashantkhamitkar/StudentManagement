import { myAxios } from "./helper";

const Enterdata=(data)=>{
    const datas=JSON.parse(sessionStorage.getItem("data"));
    const id=datas.stdid;
    const url=`/student/${id}`
    return myAxios.put(url,data).then((res)=>res.data);
}
export default Enterdata;