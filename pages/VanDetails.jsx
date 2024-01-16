import { useLoaderData } from "react-router-dom";
import VanItem from "../components/VanItem";
import { getVans } from "../api";

const VanDetails = () => {
    const data = useLoaderData();
    // console.log(data);

    return ( 
        <VanItem van={data} />
     );
}
 
export default VanDetails;

export async function loader({params}){
    return getVans(params.id);
    // const id = params.id;
    // const response = await fetch('/api/vans/' + id );

    // if(!response.ok) {
    //     console.log('failed fecthing data');
    // } else {
    //     return response;
    // }
}