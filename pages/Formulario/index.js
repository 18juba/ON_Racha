import React, { useState } from "react";
import LayoutComponent from "@/components/layout";
import GenericForm from "@/components/genericComponents/LoginForm";
import "./styles.css"
import { Alert } from "react-bootstrap";
import moment from "moment";

export default function Formulario() {
    const [entity, setEntity] = useState({})
    const [fistStep, setFirstStep] = useState(false)
    const confirmPassword = (key) => {
        const pattern = /[^a-zA-Z0-9\s]/;
        if (key && key.length > 8 && pattern.test(key)) {
            return true
        }
    }
    const formConfig = !fistStep ? {
        row: {
            fields: [
                { id: 'nome', label: 'Username', type: 'text', placeholder: 'Username', defaultValue: '' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Email', defaultValue: '' },
                { id: 'password', label: 'Password', type: 'password', placeholder: 'Password', defaultValue: '' },
                confirmPassword(entity.password) ? { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm password', defaultValue: '' } : null
            ]
        },
        // row2: {
        //     fields: [
        //         { id: 'celular', label: 'Celular', type: 'text', placeholder: 'Celular', defaultValue: '' },
        //         { id: 'data_nasc    ', label: 'Data de Nascimento', type: 'date', placeholder: 'Data de Nascimento', defaultValue: '' },
        //     ]
        // }
    } :
        {
            row: {
                fields: [
                    { id: 'celular', label: 'Celular', type: 'text', placeholder: 'Celular', defaultValue: '' },
                    { id: 'nascido_em', label: 'Data de Nascimento', type: 'date', placeholder: 'Data de Nascimento', defaultValue: '' },
                ]
            }
        }

    const confirmEntity = (entity) => {
        const password = entity.password;
        const confirmPassword = entity.confirmPassword;

        if (password === confirmPassword) {
            return true;
        } else {
            alert("As senhas não conferem");
            return false;
        }
    };

    function beforeFinish(entity) {
        if (!fistStep) {
            if (Object.keys(entity).length == 4) {
                setEntity({...entity, created_at: moment(), tipo_user_id: "4"})
                confirmEntity(entity) ?
                    setFirstStep(true) : setFirstStep(false)
                
            } else {
                setFirstStep(false)
                alert("Faltam preencher alguns dados")
            }
        } else if (Object.keys(entity).length == 8) {
            console.log(entity)
            return true
        } else { 
            console.log("deu erro", entity)
            return false 
        }
    }

    return (
        <LayoutComponent>
            <div className="Container">
                <GenericForm title={"Cadastre-se"} formConfig={formConfig} entites={entity} setEntities={setEntity} urlSuffix={"users"} beforeFinish={beforeFinish} />
            </div>
        </LayoutComponent>
    )
}
