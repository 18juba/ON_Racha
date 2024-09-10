import axios from "axios"
import { BASEURL } from "./constants"

export function makeConection(endPoint: string, method: string, body?: Record<string, unknown>): void {
    const url = BASEURL + endPoint

    const config: Record<string, unknown> = {
        contentType:"application/json",
    }

    switch (method) {
        case "GET":
            axios.get(url, config)
            break;
        case "POST":
            axios.post(url, body, config) 
            break;
        case "PUT":
            axios.put(url, body, config)
            break;
        case "DELETE":
            axios.delete(url, config)
            break;
    }

}