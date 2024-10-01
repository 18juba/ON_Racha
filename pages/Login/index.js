import LayoutComponent from "@/components/layout";
import LoginForm from "@/components/Login/Index";
import "./styles.css"

export default function Login() {
    return (
        <LayoutComponent>
            <div className="Container">

                <LoginForm />

            </div>
        </LayoutComponent>
    )
}