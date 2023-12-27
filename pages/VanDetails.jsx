import { useLoaderData } from "react-router-dom";
import VanItem from "../components/VanItem";

const VanDetails = () => {
    const data = useLoaderData();
    // console.log(data.vans);

    return ( 
        <VanItem van={data.vans} />
     );
}
 
export default VanDetails;

export async function loader({params}){
    const id = params.id;
    const response = await fetch('/api/vans/' + id );

    if(!response) {
        console.log('failed fecthing data');
    } else {
        return response;
    }
}