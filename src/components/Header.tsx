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
      <div className="bg-header text-header-foreground px-4 py-4">
        <h1 className="text-xl font-serif font-normal">Mr Sharafdin</h1>
        <p className="text-sm italic opacity-90 mt-0.5">
          Self-taught Innovator, Trier, and Open-Source Contributor
        </p>
      </div>
      <nav className="bg-nav">
        <ul className="flex flex-wrap">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-block px-3 py-1.5 text-xs text-header-foreground font-medium hover:bg-white/10 transition-colors"
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
