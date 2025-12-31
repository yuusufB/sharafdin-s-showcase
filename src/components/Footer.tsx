export function Footer() {
  return (
    <footer className="bg-muted border-t border-page-border py-4 text-center">
      <p className="text-xs text-muted-foreground mb-1">
        Copyright © 2025 Mr Sharafdin. All rights reserved.
      </p>
      <div className="text-xs space-x-1 mb-1">
        <a href="#about" className="link-accent">About</a>
        <span className="text-muted-foreground">|</span>
        <a href="#projects" className="link-accent">Projects</a>
        <span className="text-muted-foreground">|</span>
        <a href="#contact" className="link-accent">Contact</a>
      </div>
      <p className="text-xs text-muted-foreground italic">
        Designed and developed by Mr Sharafdin with a focus on innovation and technical excellence.
      </p>
    </footer>
  );
}
