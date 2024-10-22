import { makeConnection } from "../../../../api/request";
import GoToSite from "../../../../Routes/historySImulation";

export function handleSubmit(urlSuffix, data, postEvent) {
    makeConnection(urlSuffix, "POST", data).then((response) => {
        if (!response.eror) {
            if (postEvent) {
                if(postEvent(response)) GoToSite('Home')
            } else {
                GoToSite('Home')
            }

        }
        else {
            alert(response.error)
        }

    })
}