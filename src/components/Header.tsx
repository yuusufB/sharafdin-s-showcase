const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'COMMUNITY', href: '#community' },
  { label: 'SCIENCE & RESEARCH', href: '#research' },
  { label: 'SOPLANG DOCS', href: 'https://soplang.org' },
  { label: 'CONTACT', href: '#contact' },
];

export function Header() {
  return (
    <header>
      <div className="bg-header text-header-foreground px-6 py-4">
        <h1 className="text-[22px] font-bold tracking-wide">Mr Sharafdin</h1>
        <p className="text-xs text-header-subtitle italic mt-1">
          Self-taught Innovator, Trier, and Open-Source Contributor
        </p>
      </div>
      <nav className="bg-header border-t-2 border-nav-border">
        <ul className="flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-block px-5 py-2 text-[13px] text-white font-bold uppercase hover:bg-[#DCE6ED] hover:text-header transition-colors tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
