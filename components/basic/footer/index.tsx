import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground py-2 mx-auto">
          Copyright © 2025 - Designed by <Link className="text-primary" href="https://github.com/codepzj/Stellux" target="_blank">Stellux</Link>
        </div>
      </div>
    </footer>
  );
}
