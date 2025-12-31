import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '#community' },
  { label: 'Science & Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <header className="bg-header text-header-foreground">
      <div className="px-6 py-6">
        <h1 className="text-2xl font-serif font-bold">Mr Sharafdin</h1>
        <p className="text-sm opacity-90 mt-1">
          Software Researcher, Title, and Open-Source Contributor
        </p>
      </div>
      <nav className="bg-header/90 border-t border-white/10">
        <ul className="flex flex-wrap gap-1 px-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`inline-block px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                  activeTab === item.label ? 'bg-white/15' : ''
                }`}
              >
                {item.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
