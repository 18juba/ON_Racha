import LayoutComponent from "@/components/layout";
import { LoginComponent } from "../../src/components/Login/loginComponent";

export default function Login() {
    return(
        <LayoutComponent bars={false}>
            <LoginComponent />
        </LayoutComponent>
    )
}