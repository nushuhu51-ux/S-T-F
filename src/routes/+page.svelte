<script lang="ts">
  import {
    ArrowUpRight,
    BrainCircuit,
    Download,
    Github,
    Linkedin,
    Mail,
    Sparkles,
    Trophy,
    GraduationCap,
    Database,
    Eye,
    Server,
    Code2,
    Cpu
  } from '@lucide/svelte';
  import { personalInfo, projects, skillCategories, achievements, certifications, education } from '$lib/portfolio/data';
  import type { Project } from '$lib/portfolio/types';
  import CaseStudyModal from '$lib/components/portfolio/CaseStudyModal.svelte';

  let selectedProject: Project | null = $state(null);

  const heroTags = ['Machine Learning', 'Deep Learning', 'LLMs', 'RAG Systems', 'Computer Vision', 'Data Science'];

  function iconFor(project: Project) {
    const c = project.category.toLowerCase();
    if (c.includes('vision')) return Eye;
    if (c.includes('backend')) return Server;
    if (c.includes('recommend')) return Database;
    if (c.includes('deep')) return BrainCircuit;
    return Sparkles;
  }
</script>

<svelte:head>
  <title>Samuel Teshale Terefe — AI / ML Engineering</title>
  <meta name="description" content="Samuel Teshale Terefe — AI Engineer, ML Engineer, Data Scientist, Deep Learning Engineer, and LLM & RAG Engineer." />
</svelte:head>

<div class="portfolio-page">
  <section class="profile-block" id="top" aria-labelledby="profile-name">
    <div class="profile-identity">
      <div class="profile-avatar" aria-hidden="true">ST</div>
      <div class="profile-copy">
        <h1 id="profile-name">{personalInfo.name}</h1>
        <div class="profile-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Github size={16} strokeWidth={1.5} /> GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} strokeWidth={1.5} /> LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}><Mail size={16} strokeWidth={1.5} /> Email</a>
        </div>
      </div>
    </div>

    <div class="profile-intro">
      <p>
        Hi there, I build intelligent systems. I work across
        {#each heroTags as tag, i}
          <span class="inline-tag">{tag}</span>{i === heroTags.length - 1 ? '.' : ''}
        {/each}
      </p>
      <p class="profile-subline">Computer Engineering graduate based in Addis Ababa, Ethiopia, focused on practical AI systems and reliable software.</p>
    </div>

    <div class="profile-actions">
      <a class="primary-action" href="/samuel-teshale-cv.pdf" download>
        <Download size={17} strokeWidth={1.5} /> Download Resume
      </a>
      <a class="secondary-action" href="#about"><span class="quote-icon">99</span> More about me</a>
      <a class="secondary-action" href="#projects"><Code2 size={17} strokeWidth={1.5} /> View projects</a>
    </div>
  </section>

  <section id="about" class="rob-section about-section" aria-labelledby="about-heading">
    <div class="section-heading-row">
      <h2 id="about-heading">About me</h2>
      <span>01 / PROFILE</span>
    </div>
    <div class="about-grid">
      <div class="about-copy">
        {#each personalInfo.about.slice(0, 2) as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
      <div class="about-facts">
        <div><span>Location</span><strong>{personalInfo.location}</strong></div>
        <div><span>Focus</span><strong>AI · ML · LLM · RAG</strong></div>
        <div><span>Engineering</span><strong>Python · APIs · Data</strong></div>
      </div>
    </div>
  </section>

  <section id="projects" class="projects-section" aria-labelledby="projects-heading">
    <div class="section-heading-row projects-heading">
      <h2 id="projects-heading">Selected work</h2>
      <span>{projects.length} projects</span>
    </div>

    {#each projects as project, index (project.id)}
      {@const ProjectIcon = iconFor(project)}
      <article class:featured={index === 0} class="project-showcase">
        <div class="project-visual" aria-hidden="true">
          <div class="visual-topline">
            <span><ProjectIcon size={15} strokeWidth={1.4} /> {project.category}</span>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div class="visual-title">{project.title}</div>
          <div class="visual-system">
            <div class="system-node">INPUT</div>
            <div class="system-line"></div>
            <div class="system-node accent">MODEL</div>
            <div class="system-line"></div>
            <div class="system-node">OUTPUT</div>
          </div>
          <div class="visual-footer">
            {#each project.technologies.slice(0, 4) as tech}<span>{tech}</span>{/each}
          </div>
        </div>
        <div class="project-info">
          <div>
            <div class="project-title-row">
              <h3>{project.title}</h3>
              <span class="project-number">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p class="project-description">{project.shortDescription}</p>
            <div class="project-tags">
              {#each project.technologies.slice(0, 6) as tech}<span>{tech}</span>{/each}
            </div>
          </div>
          <div class="project-actions">
            <button type="button" onclick={() => (selectedProject = project)}>Read the case study <ArrowUpRight size={15} strokeWidth={1.5} /></button>
            {#if project.github}<a href={project.github} target="_blank" rel="noopener noreferrer">source <ArrowUpRight size={14} /></a>{/if}
            {#if project.demo}<a href={project.demo} target="_blank" rel="noopener noreferrer">site <ArrowUpRight size={14} /></a>{/if}
          </div>
        </div>
      </article>
    {/each}
  </section>

  <section id="skills" class="rob-section" aria-labelledby="skills-heading">
    <div class="section-heading-row"><h2 id="skills-heading">Technical stack</h2><span>02 / SYSTEMS</span></div>
    <div class="tag-cloud">
      {#each skillCategories as category}
        {#each category.skills as skill}<span>{skill}</span>{/each}
      {/each}
    </div>
  </section>

  <section id="recognition" class="rob-section" aria-labelledby="recognition-heading">
    <div class="section-heading-row"><h2 id="recognition-heading">Recognition & credentials</h2><span>03 / CREDENTIALS</span></div>
    <div class="two-column-list">
      <div>
        {#each achievements as achievement}
          <article class="compact-item">
            <div class="compact-icon"><Trophy size={16} strokeWidth={1.4} /></div>
            <div><span>{achievement.year} · {achievement.level}</span><h3>{achievement.competition}</h3><p>{achievement.prize}</p></div>
          </article>
        {/each}
      </div>
      <div>
        {#each certifications as certification}
          <article class="compact-item">
            <div class="compact-icon"><Cpu size={16} strokeWidth={1.4} /></div>
            <div><span>{certification.year}</span><h3>{certification.title}</h3><p>{certification.issuer}</p></div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="education" class="rob-section" aria-labelledby="education-heading">
    <div class="section-heading-row"><h2 id="education-heading">Education</h2><span>04 / FOUNDATION</span></div>
    <div class="education-row">
      <div class="compact-icon"><GraduationCap size={17} strokeWidth={1.4} /></div>
      <div><span>{education.location}</span><h3>{education.institution}</h3><p>{education.degree} · {education.field}</p></div>
      <div class="education-stats"><span>GPA <strong>{education.gpa}</strong></span><span>Exit exam <strong>{education.exitExam}</strong></span></div>
    </div>
  </section>

  <section id="contact" class="contact-block" aria-labelledby="contact-heading">
    <div>
      <span class="contact-kicker">LET'S TALK</span>
      <h2 id="contact-heading">Let's build your next intelligent system.</h2>
      <p>Drop me a message about AI engineering, machine learning, data, backend systems, or a project idea.</p>
    </div>
    <div class="contact-action-row">
      <a class="primary-action" href={`mailto:${personalInfo.email}`}><Mail size={17} /> Send message</a>
      <a class="secondary-action" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
    </div>
  </section>

  <footer class="portfolio-footer">
    <span>{personalInfo.name}</span>
    <span>Made with © {new Date().getFullYear()}</span>
    <span>{personalInfo.email}</span>
  </footer>
</div>

<CaseStudyModal project={selectedProject} onclose={() => (selectedProject = null)} />
