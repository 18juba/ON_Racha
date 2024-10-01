import React, { useEffect, useState } from "react"
import "./layout-styles.module.css"
import LoadingSpinner from "../Loading";
import Sidebar from "../sideBar";
import Topbar from "../topbar";

export default function LayoutComponent({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="FullPage">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="topBar">
                    <p>teste</p>
                    <Topbar />
                </div>
                {loading ? <LoadingSpinner /> : children}
            </div>
        </>
    )
}