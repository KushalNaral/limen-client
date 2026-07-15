import { useAuth } from "@/api/hooks/auth/use-auth";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { LogOut, Hexagon } from "lucide-react";
import { useNavigate } from "react-router";

export default function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await auth.signout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Hexagon className="h-6 w-6 text-primary" />
          <span className="font-bold tracking-tight">Limen Auth</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex text-sm text-muted-foreground">
            {user?.email}
          </div>
          <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2 text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
