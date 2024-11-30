import { useRouteError } from "react-router-dom";

type ErrorType ={
    message:string,
    statusText:string,
}


export default function ErrorPage() {
    const error= useRouteError() as ErrorType
    console.log(error);

    return(
        <div>
            <h1>oops!</h1>
            <p>sorry, an unexpected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
    
}