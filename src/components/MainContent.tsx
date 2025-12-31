import profileImage from '@/assets/profile-image.jpeg';

interface ProjectProps {
  name: string;
  tags: string;
  description: React.ReactNode;
  repoUrl: string;
}

function Project({ name, tags, description, repoUrl }: ProjectProps) {
  return (
    <div className="mb-5 pb-5 border-b border-border last:border-b-0">
      <h4 className="project-title">{name}</h4>
      <p className="tag mb-1">{tags}</p>
      <p className="text-foreground leading-relaxed mb-1">{description}</p>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="link-accent">
        GitHub Repository
      </a>
    </div>
  );
}

export function MainContent() {
  return (
    <main className="bg-card p-4">
      {/* About Section */}
      <section id="about" className="mb-6">
        <h2 className="section-title">About Mr Sharafdin</h2>
        
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="leading-relaxed mb-3">
              Sharafdin began coding at age <strong>12</strong>, became a tech mentor by <strong>16</strong>, created his own programming language{' '}
              <a href="https://soplang.org" className="link-accent font-bold">Soplang</a> at <strong>17</strong>, and built a custom Debian-based operating system by <strong>18</strong>. Today, he continues to innovate across open source, language design, and developer mentorship.
            </p>
            <p className="leading-relaxed">
              His work spans <strong>low-level system programming</strong>, <strong>blockchain development</strong>, <strong>security research</strong>, and <strong>software tools</strong>, all driven by a commitment to problem-solving and sharing knowledge with others.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Mr Sharafdin"
              className="w-36 h-auto border border-page-border"
            />
          </div>
        </div>
      </section>

      {/* Notable Open-Source Projects */}
      <section id="projects" className="mb-6">
        <h2 className="section-title">Notable Open-Source Projects</h2>
        
        <p className="leading-relaxed mb-4">
          As an <strong>active developer</strong>, he builds and maintains projects that help developers and researchers. Some of his key works include:
        </p>

        <Project
          name="Hanticoin"
          tags="Blockchain, Proof-of-Work"
          description={<>A <strong>Proof-of-Work (PoW) blockchain</strong> designed for <strong>decentralized payments in Somalia</strong>.</>}
          repoUrl="https://github.com/hanticoin"
        />

        <Project
          name="Soplang"
          tags="Programming Language, Compiler"
          description={<>A <strong>Somali programming language</strong> designed to bring coding closer to Somali speakers and promote programming in the local language.</>}
          repoUrl="https://github.com/soplang/soplang"
        />

        <Project
          name="blackSQL"
          tags="Security, SQL Injection"
          description={<>A SQL tool that automates SQL Injection detection. Scan, exploit, and bypass WAFs with ease.</>}
          repoUrl="https://github.com/sharafdin/blacksql"
        />

        <Project
          name="Yonode"
          tags="Node.js, JavaScript"
          description={<>A <strong>Node.js toolkit</strong> for simplifying and improving development workflows.</>}
          repoUrl="https://github.com/sharafdin/yonode"
        />

        <p className="mt-3">
          Explore more on{' '}
          <a href="https://github.com/sharafdin" target="_blank" rel="noopener noreferrer" className="link-accent">
            Sharafdin's GitHub Profile
          </a>.
        </p>
      </section>

      {/* Community & Mentorship */}
      <section id="community" className="mb-6">
        <h2 className="section-title">Community & Mentorship</h2>
        
        <p className="leading-relaxed mb-3">
          Mr Sharafdin actively contributes to <a href="#" className="link-accent">open-source communities</a> and fosters discussions around <strong>technology</strong>, <strong>programming</strong>, and <strong>security</strong>.
        </p>

        <div className="mb-3">
          <h4 className="project-title">CoudMub</h4>
          <p className="leading-relaxed">
            A community-driven platform that brings together developers, learners, and professionals to share knowledge, collaborate on projects, and discuss tech advancements.
          </p>
        </div>

        <p className="leading-relaxed">
          Through his <strong>open-source projects</strong>, <strong>community efforts</strong>, and <strong>mentorship</strong>, he encourages learning, problem-solving, and skill development.
        </p>
      </section>

      {/* Science & Research */}
      <section id="research" className="mb-4">
        <h2 className="section-title">Science & Research</h2>
        
        <p className="leading-relaxed mb-3">
          Beyond programming, Mr Sharafdin is deeply involved in <strong>scientific research and exploration</strong>. His areas of interest include:
        </p>

        <ul className="space-y-1 mb-4 ml-1">
          <li>
            <span className="text-link">•</span>{' '}
            <a href="#" className="link-accent font-semibold">Astrophysics & Cosmology</a> – Exploring the universe through independent research
          </li>
          <li>
            <span className="text-link">•</span>{' '}
            <a href="#" className="link-accent font-semibold">Astrology & Chemistry</a> – Studying the structure and properties of materials
          </li>
          <li>
            <span className="text-link">•</span>{' '}
            <a href="#" className="link-accent font-semibold">Data Science & Machine Learning</a> – Building practical AI-driven solutions
          </li>
        </ul>

        <p className="leading-relaxed">
          His passion for <strong>space exploration</strong> led him to achieve an astrophysics milestone in August 2021, marking a significant contribution to the field. His research and dedication to understanding the universe continue to inspire others interested in astronomy and astrophysics.
        </p>
      </section>
    </main>
  );
}
