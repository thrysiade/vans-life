import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)

    return (
        <>
            <h1>An Error Occured!</h1>
            <p></p>
        </>
    );
}
 
export default Error;