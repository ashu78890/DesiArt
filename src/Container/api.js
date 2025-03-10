import { useEffect,useState } from "react"
import { selectData } from "../Store/selector"
import { fetchRequestAction } from "../Store/action"
import { useDispatch } from "react-redux"
function CallApi (){
    const [data,setData]=useState([])
    
    // useEffect(()=>{
    //  fetch('https://jsonplaceholder.typicode.com/posts')
    //  .then(response => response.json())
    //    .then((data)=> setData(data))
    // },[])
    // console.log(data,"sdh")
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log("call")
      dispatch(fetchRequestAction()) 
    },[dispatch])
    return(
        <div>hhhj</div>
    )

}


export default CallApi