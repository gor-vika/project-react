
import { Outlet } from "react-router-dom";
import SiteHeader from '../components/common/SiteHeader';
import SiteFooter from "../components/common/SiteFooter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout(){
    return <div className="page-wrapper">
        <SiteHeader />
        <Outlet />
        <SiteFooter />
        <ToastContainer />
    </div>
}