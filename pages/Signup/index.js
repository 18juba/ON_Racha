import React, { useState } from "react";
import LayoutComponent from "@/components/layout";
import GenericForm from "@/components/genericComponents/GenericForm";
import "./styles.css"
import { Alert } from "react-bootstrap";
import moment from "moment";

export default function FormularioCadastro() {
    const [entity, setEntity] = useState({})
    const confirmPassword = (key) => {
        const pattern = /[^a-zA-Z0-9\s]/;
        if (key && key.length > 8 && pattern.test(key)) {
            return true
        }
    }
    

    const formConfig = {
        row: {
            key: 1,
            fields: [
                { id: 'nome', label: 'Username', type: 'text', placeholder: 'Username', defaultValue: '' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Email', defaultValue: '' },
                { id: 'password', label: 'Password', type: 'password', placeholder: 'Password', defaultValue: '', bottomLabel: <span style={{color: 'yellow'}}><b>A senha deve conter Letras, numeros e um caractere especial</b></span>},
                confirmPassword(entity.password) ? { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm password', defaultValue: '' } : null
            ]
        },
        row2: {
            key: 2,
            fields: [
                { id: 'celular', label: 'Celular', type: 'text', placeholder: 'Celular', defaultValue: '' },
                { id: 'data_nasc', label: 'Data de Nascimento', type: 'date', placeholder: 'Data de Nascimento', defaultValue: '' },
            ]
        }
    }

    const confirmEntity = (entity, currentRow) => {
        const password = entity.password;
        const confirmPassword = entity.confirmPassword;
        if (currentRow === 0) {
            if (password === confirmPassword && Object.keys(entity).length === 4) {
                return true;
            } else if (password !== confirmPassword) {
                alert("As senhas não conferem");
                return false;
            } else if (Object.keys(entity).length < 4) {
                alert("Alguns campos estão faltando")
                return false
            }
        } else if(currentRow === 1) {
            if (Object.keys(entity).length === 6) {
                return true;
            } else if (Object.keys(entity).length < 6) {
                alert("Alguns campos estão faltando")
                return false
            }
        }
    };

    function beforeFinish(entity) {
        if (Object.keys(entity).length == 6) {
            let saveEntity = { ...entity, created_at: moment(), tipo_user_id: "4" }
            setEntity({ ...entity, created_at: moment(), tipo_user_id: "4" })
            return saveEntity
        } else {
            return false
        }
    }

    return (
    <div className="background-sign">
        <video autoPlay muted src="sign1.mp4" className="video-background">
            {/* <source src="../../public/sign1.mp4" type="video/mp4" /> */}
        </video>
        {/* <LayoutComponent bars={false}> */}  
            <div className="Container">
                <GenericForm
                    checkInputs={confirmEntity}
                    title={"Cadastre-se"}
                    buttonLabel={"Cadastrar"}
                    formConfig={formConfig}
                    entites={entity}
                    setEntities={setEntity}
                    subtPath={{ url: "Login", label: "Faça login" }}
                    urlSuffix={"new_user"}
                    beforeFinish={beforeFinish}
                />
            </div>
        {/* </LayoutComponent> */}
    </div>
    )
}
