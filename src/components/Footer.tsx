export function Footer() {
  return (
    <footer className="bg-muted border-t border-section-border py-6 text-center">
      <p className="text-xs text-muted-foreground mb-2">
        Copyright © 2025 Mr Sharafdin. All rights reserved.
      </p>
      <div className="text-xs space-x-2 mb-2">
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
