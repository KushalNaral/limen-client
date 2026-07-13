import { Outlet } from "react-router";
import { NavMenu } from "@/components/utils/ui/nav-bar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto py-2">
          <NavMenu />
        </div>
      </header>

      <main className="container mx-auto py-6">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
