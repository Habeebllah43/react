import { useParams } from "react-router-dom"


export default function About(){
    const params = useParams();
    console.log('about', params);
    
    return (
    <h1>This is about page. {params.aboutId}.</h1>

    )

}