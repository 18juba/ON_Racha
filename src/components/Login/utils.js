import { useUserStore } from '../../../stores/usersStore';

export const postEvent = (response) => {
    const {setEntity} = useUserStore.getState()
    console.log(response.data.user)
    setEntity(response.data.user)
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("authToken", response.data.access_token)
    return true
}