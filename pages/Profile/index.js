import FormularioJogador from "@/components/genericComponents/ScreenForm";
import LayoutComponent from "@/components/layout";
import "./styles.css"
export default function Profile() {

    return (
        <LayoutComponent>
            <div className="content">
                <FormularioJogador />
            </div>
        </LayoutComponent>
    )
}