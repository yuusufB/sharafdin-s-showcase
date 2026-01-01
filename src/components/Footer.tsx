export function Footer() {
  return (
    <footer className="bg-footer border-t border-page-border py-4 text-center">
      <p className="text-[11px] text-footer-text mb-1">
        Copyright © 2025 Mr Sharafdin. All rights reserved.
      </p>
      <div className="text-[11px] space-x-1 mb-1">
        <a href="#about" className="text-link hover:underline">About</a>
        <span className="text-footer-text">|</span>
        <a href="#projects" className="text-link hover:underline">Projects</a>
        <span className="text-footer-text">|</span>
        <a href="#contact" className="text-link hover:underline">Contact</a>
      </div>
      <p className="text-[11px] text-footer-text italic">
        Designed and developed by Mr Sharafdin with a focus on innovation and technical excellence.
      </p>
    </footer>
  );
}
