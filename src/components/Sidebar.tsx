import { Mail, Globe, Github, Linkedin, Twitter } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="space-y-4">
      {/* Contact Information */}
      <div className="sidebar-box">
        <h3 className="font-serif font-bold text-link mb-3">Connect with Mr Sharafdin</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground w-16">Email:</span>
            <a href="mailto:hello@sharafdin.com" className="link-accent break-all">
              hello@sharafdin.com
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground w-16">Twitter/X:</span>
            <a href="https://twitter.com/sharafdin" className="link-accent">
              @sharafdin
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground w-16">GitHub:</span>
            <a href="https://github.com/sharafdin" className="link-accent">
              @sharafdin
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground w-16">LinkedIn:</span>
            <a href="https://linkedin.com/in/sharafdin" className="link-accent">
              @sharafdin
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground w-16">Medium:</span>
            <a href="https://medium.com/@sharafdin" className="link-accent">
              @sharafdin
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground w-16">ORCID:</span>
            <a href="#" className="link-accent text-xs">
              0000-0000-0000-0105
            </a>
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div className="sidebar-box">
        <h3 className="font-serif font-bold text-link mb-3">Core Competencies</h3>
        <ul className="text-sm space-y-1 list-disc list-inside text-foreground">
          <li>Low-level System Programming</li>
          <li>Blockchain Development</li>
          <li>Security Research</li>
          <li>Software Tools</li>
          <li>Data Science & Analytics</li>
          <li>Astrophysics & Cosmology</li>
        </ul>
      </div>

      {/* Open Source Advocate */}
      <div className="sidebar-accent-box">
        <h3 className="font-serif font-bold text-link mb-2">Open Source Advocate</h3>
        <p className="text-sm text-foreground leading-relaxed">
          Mr Sharafdin is committed to building and sharing open-source tools that solve real problems for developers and researchers.
        </p>
      </div>
    </aside>
  );
}
