// import '../css/layout.css';
// import { Header } from './Header';
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
