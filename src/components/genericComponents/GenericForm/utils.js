import { makeConnection } from "../../../../api/request";
import GoToSite from "../../../../Routes/historySImulation";

export function handleSubmit(urlSuffix, data){
    makeConnection(urlSuffix, "POST", data).then((response) => {
        if (!response.eror){
            GoToSite('Home')
        }
        else {
            alert(response.error)
        }
        
    })
}