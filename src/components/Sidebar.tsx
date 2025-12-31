export function Sidebar() {
  return (
    <aside className="space-y-3">
      {/* Connect Section */}
      <div className="sidebar-box">
        <h3 className="sidebar-title font-serif">Connect with Mr Sharafdin</h3>
        <div className="space-y-1.5 text-xs">
          <div>
            <span className="font-bold">Email:</span><br />
            <a href="mailto:hello@sharafdin.com" className="link-accent">
              hello@sharafdin.com
            </a>
          </div>
          <div>
            <span className="font-bold">Twitter/X:</span><br />
            <a href="https://twitter.com/isasharafdin" className="link-accent">
              @isasharafdin
            </a>
          </div>
          <div>
            <span className="font-bold">GitHub:</span><br />
            <a href="https://github.com/sharafdin" className="link-accent">
              @sharafdin
            </a>
          </div>
          <div>
            <span className="font-bold">LinkedIn:</span><br />
            <a href="https://linkedin.com/in/sharafdin" className="link-accent">
              @sharafdin
            </a>
          </div>
          <div>
            <span className="font-bold">Medium:</span><br />
            <a href="https://medium.com/@sharafdin" className="link-accent">
              @sharafdin
            </a>
          </div>
          <div>
            <span className="font-bold">ORCID:</span><br />
            <a href="https://orcid.org/0009-0008-0066-5105" className="link-accent">
              0009-0008-0066-5105
            </a>
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div className="sidebar-box">
        <h3 className="sidebar-title">Core Competencies</h3>
        <ul className="text-xs space-y-0.5 list-disc list-inside">
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
        <h3 className="sidebar-title">Open Source Advocate</h3>
        <p className="text-xs leading-relaxed">
          Mr Sharafdin is committed to building and sharing open-source tools that solve real problems for developers and researchers.
        </p>
      </div>
    </aside>
  );
}
