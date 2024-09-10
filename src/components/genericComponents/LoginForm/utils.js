import { makeConection } from "../../../../api/request";

export function handleSubmit(urlSuffix, data){
    makeConection(urlSuffix, "POST", data)
}