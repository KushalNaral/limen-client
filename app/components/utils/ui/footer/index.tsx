import { Hexagon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Hexagon className="h-4 w-4" />
          <p>
            &copy; {new Date().getFullYear()} Limen Auth. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
