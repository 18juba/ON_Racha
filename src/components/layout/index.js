
import React, { useEffect, useState } from "react"
import "./layout-styles.module.css"
import LoadingSpinner from "../Loading";
import Sidebar from "../sideBar";
import Topbar from "../topbar";
import { UserProvider } from "../../../contexts/useContext";

export default function LayoutComponent({ children, bars = true}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <UserProvider>
            <div className="FullPage">
                {bars ? (
                    <div>
                        <div>
                            <Sidebar />
                        </div>
                        <div className="topBar">
                            <Topbar />
                        </div>
                    </div>
                )
                    :
                    null}
                {loading ? <LoadingSpinner /> : children}
            </div>
        </UserProvider>
    )
}