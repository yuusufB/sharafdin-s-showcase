import portraitImage from '@/assets/portrait.jpg';

interface ProjectProps {
  name: string;
  tags: string;
  description: string;
  repoUrl?: string;
}

function Project({ name, tags, description, repoUrl }: ProjectProps) {
  return (
    <div className="mb-6">
      <h4 className="subsection-title">{name}</h4>
      <p className="tag mb-2">{tags}</p>
      <p className="text-sm text-foreground leading-relaxed mb-1">{description}</p>
      {repoUrl && (
        <a href={repoUrl} className="link-accent text-sm">
          GitHub Repository
        </a>
      )}
    </div>
  );
}

export function MainContent() {
  return (
    <main className="bg-card p-6 border border-section-border">
      {/* About Section */}
      <section id="about" className="mb-8">
        <h2 className="section-title">About Mr Sharafdin</h2>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="sm:w-36 flex-shrink-0">
            <img
              src={portraitImage}
              alt="Mr Sharafdin"
              className="w-full max-w-[140px] border border-section-border grayscale"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm leading-relaxed mb-4">
              Sharafdin began coding at age 12, became a tech mentor by 16, created his own programming language{' '}
              <a href="#" className="link-accent font-semibold">Soplang</a> at 17, and built a custom Debian-based operating system by 18. Today, he continues to innovate across open-source, language design, and developer mentorship.
            </p>
            <p className="text-sm leading-relaxed">
              His work spans <strong>low-level system programming</strong>, <strong>blockchain development</strong>,{' '}
              <strong>security research</strong>, and <strong>software tools</strong>, all driven by a commitment to problem-solving and sharing knowledge with others.
            </p>
          </div>
        </div>
      </section>

      {/* Notable Open-Source Projects */}
      <section id="projects" className="mb-8">
        <h2 className="section-title">Notable Open-Source Projects</h2>
        
        <p className="text-sm leading-relaxed mb-6">
          As an active developer, he builds and maintains projects that help developers and researchers. Some of his key works include:
        </p>

        <Project
          name="Manticoin"
          tags="Blockchain, Proof-of-Work"
          description="A Proof-of-Work (PoW) blockchain designed for decentralized payments in Somalia."
          repoUrl="#"
        />

        <Project
          name="Soplang"
          tags="Programming Language, Compiler"
          description="A Somali programming language designed to bring coding closer to Somali speakers and promote programming in the local language."
          repoUrl="#"
        />

        <Project
          name="SonarSQL"
          tags="Security, SQL Injection"
          description="A SQL tool that automates SQL Injection detection. Scan, exploit, and bypass WAFs with ease."
          repoUrl="#"
        />

        <Project
          name="Yanode"
          tags="Node.js, JavaScript"
          description="A Node.js toolkit for simplifying and improving development workflows."
          repoUrl="#"
        />

        <p className="text-sm mt-4">
          Explore more on{' '}
          <a href="https://github.com/sharafdin" className="link-accent font-semibold">
            Sharafdin's GitHub Profile
          </a>
        </p>
      </section>

      {/* Community & Mentorship */}
      <section id="community" className="mb-8">
        <h2 className="section-title">Community & Mentorship</h2>
        
        <p className="text-sm leading-relaxed mb-4">
          Mr Sharafdin actively contributes to <a href="#" className="link-accent">open-source communities</a> and fosters discussions around <strong>technology</strong>, <strong>programming</strong>, and <strong>security</strong>.
        </p>

        <div className="mb-4">
          <h4 className="subsection-title">CoudMub</h4>
          <p className="text-sm leading-relaxed mb-2">
            A community-driven platform that brings together developers, learners, and professionals to share knowledge, collaborate on projects, and discuss tech advancements.
          </p>
        </div>

        <p className="text-sm leading-relaxed">
          Through his <strong>open-source projects</strong>, <strong>community efforts</strong>, and <strong>mentorship</strong>, he encourages learning, problem-solving, and skill development.
        </p>
      </section>

      {/* Science & Research */}
      <section id="research" className="mb-8">
        <h2 className="section-title">Science & Research</h2>
        
        <p className="text-sm leading-relaxed mb-4">
          Beyond programming, Mr Sharafdin is deeply involved in <strong>scientific research and exploration</strong>. His areas of interest include:
        </p>

        <ul className="text-sm space-y-2 ml-4">
          <li>
            <span className="text-link font-semibold">•</span>{' '}
            <a href="#" className="link-accent font-semibold">Astrophysics & Cosmology</a> – Exploring the universe through independent research
          </li>
          <li>
            <span className="text-link font-semibold">•</span>{' '}
            <a href="#" className="link-accent font-semibold">Astrology & Chemistry</a> – Studying the structure and properties of materials
          </li>
          <li>
            <span className="text-link font-semibold">•</span>{' '}
            <a href="#" className="link-accent font-semibold">Data Science & Machine Learning</a> – Building practical AI-driven solutions
          </li>
        </ul>

        <p className="text-sm leading-relaxed mt-4">
          His passion for <strong>space exploration</strong> led him to achieve an astrophysics milestone in August 2021, marking a significant contribution to the field. His research and dedication to understanding the universe continue to inspire others interested in astronomy and astrophysics.
        </p>
      </section>
    </main>
  );
}
