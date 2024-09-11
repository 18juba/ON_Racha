import { makeConnection } from "../../../../api/request";

export function handleSubmit(urlSuffix, data){
    makeConnection(urlSuffix, "POST", data)
}