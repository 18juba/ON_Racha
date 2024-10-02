import "./styles.css"
import GenericForm from "@/components/genericComponents/GenericForm";
import { useState } from "react";
import { useUser } from "../../contexts/useContext";
import { useUserStore } from "../../stores/usersStore";

export function LoginComponent() {
    const [entity, setFormEntity] = useState({})
    const { getUser } = useUser()
    const {setEntity} = useUserStore()


    const formConfig = {
        row: {
            key: 1,
            fields: [
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Email', defaultValue: '' },
                { id: 'password', label: 'Password', type: 'password', placeholder: 'Password', defaultValue: '' },
            ]
        }
    }
    
    function beforeFinish(entity) {
        if (Object.keys(entity).length == 2) {
            return entity
        } else {
            console.log("Insira os dados corretamente", entity)
            return false
        }
    }

    function contextTheUser(response){
        console.log(response.data.user)
        setEntity(response.data.user)
        getUser(response.data.user)
        return true
    }

    return (
            <div className="Container">
                <GenericForm formConfig={formConfig} urlSuffix={"login"} entites={entity} setEntities={setFormEntity} title={"Faça Login"} beforeFinish={beforeFinish} postEvent={contextTheUser}/>
            </div>
    )
}