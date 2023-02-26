import Topbar from "./Topbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Topbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;