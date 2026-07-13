import Header from "@/components/utils/ui/header";
import Footer from "@/components/utils/ui/footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Header />
      <div>default layout</div>
      <Outlet />
      <Footer />
    </>
  );
}
