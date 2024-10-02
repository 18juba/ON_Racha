import LayoutComponent from "@/components/layout";
import { LoginComponent } from "./loginComponent";

export default function Login() {
    return(
        <LayoutComponent bars={false}>
            <LoginComponent />
        </LayoutComponent>
    )
}