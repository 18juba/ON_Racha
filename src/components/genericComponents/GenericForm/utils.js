import { makeConnection } from "../../../../api/request";
import GoToSite from "../../../../Routes/historySImulation";

export function handleSubmit(urlSuffix, data, postEvent) {
    console.log("post no sub", postEvent)
    makeConnection(urlSuffix, "POST", data).then((response) => {
        if (!response.eror) {
            if (postEvent) {
                console.log("é pra dar certo")
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