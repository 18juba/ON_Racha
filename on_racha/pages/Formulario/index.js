import React, { useState } from "react";
import LayoutComponent from "@/components/layout";
import GenericForm from "@/components/genericComponents/LoginForm";
import "./styles.css"
import { Alert } from "react-bootstrap";

export default function Formulario() {
    const [entity, setEntity] = useState({})
    const confirmPassword = (key) => {
        const pattern = /[^a-zA-Z0-9\s]/;
        if (key && key.length > 8 && pattern.test(key)) {
            return true
        }
    }
    const formConfig = {
        row1: {
            fields: [
                { id: 'username', label: 'Username', type: 'text', placeholder: 'Enter username', defaultValue: '' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter email', defaultValue: '' },
                { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter password', defaultValue: '' },
                confirmPassword(entity.password) ? { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm password', defaultValue: '' } : null
            ]
        }
    }

    const confirmEntity = (entity) => {
        console.log("era pra ter passado")
        if(entity.confirmPassword == entity.Password){
            return true
        }else {
            console.log(entity)
            alert("senhas não conferem", entity)
            return false
        }
    }

    return (
        <LayoutComponent>
            <div className="Container">
                <GenericForm title={"Cadastre-se"} formConfig={formConfig} entites={entity} setEntities={setEntity} urlSuffix={"users"} beforeFinish={confirmEntity} />
            </div>
        </LayoutComponent>
    )
}
