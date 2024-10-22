import Router from "next/router"
export default function GoToSite(endPoint){
    const router = Router
    router.push(`/${endPoint}`)

}