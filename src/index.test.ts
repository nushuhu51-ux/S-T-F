import { describe, it, expect } from 'vitest';
import {
  projects,
  skillCategories,
  certifications,
  achievements,
  education,
  personalInfo
} from '$lib/portfolio/data';

// ================================================================
// Portfolio data integrity tests
// These verify that the CV data structure is correct and complete.
// ================================================================

describe('personalInfo', () => {
  it('has a non-empty name', () => {
    expect(personalInfo.name).toBe('Samuel Teshale Terefe');
  });

  it('has a valid email address', () => {
    expect(personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('has a GitHub URL', () => {
    expect(personalInfo.github).toMatch(/^https:\/\/github\.com\//);
  });

  it('has a LinkedIn URL', () => {
    expect(personalInfo.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
  });

  it('has at least one professional title', () => {
    expect(personalInfo.titles.length).toBeGreaterThan(0);
  });

  it('has a non-empty tagline', () => {
    expect(personalInfo.tagline.length).toBeGreaterThan(10);
  });

  it('has about paragraphs', () => {
    expect(personalInfo.about.length).toBeGreaterThan(0);
    personalInfo.about.forEach((p) => {
      expect(p.length).toBeGreaterThan(0);
    });
  });
});

describe('projects', () => {
  it('has exactly 4 featured projects', () => {
    expect(projects).toHaveLength(4);
  });

  it('each project has required fields', () => {
    projects.forEach((p) => {
      expect(p.id, `project ${p.id} missing id`).toBeTruthy();
      expect(p.title, `project ${p.id} missing title`).toBeTruthy();
      expect(p.category, `project ${p.id} missing category`).toBeTruthy();
      expect(p.shortDescription, `project ${p.id} missing shortDescription`).toBeTruthy();
      expect(p.technologies, `project ${p.id} missing technologies`).toBeDefined();
      expect(p.technologies.length, `project ${p.id} has no technologies`).toBeGreaterThan(0);
      expect(p.highlights, `project ${p.id} missing highlights`).toBeDefined();
      expect(p.highlights.length, `project ${p.id} has no highlights`).toBeGreaterThan(0);
    });
  });

  it('no project contains fabricated metrics (no percentages in result fields)', () => {
    // Catches accidentally added fake stats like "99% accuracy"
    const metricPattern = /\d+%\s*(accuracy|precision|recall|f1|improvement|faster)/i;
    projects.forEach((p) => {
      expect(p.result, `project ${p.id} has suspicious metric`).not.toMatch(metricPattern);
    });
  });

  it('no project has a fake GitHub link', () => {
    projects.forEach((p) => {
      if (p.github !== null) {
        expect(p.github).toMatch(/^https:\/\/github\.com\//);
      }
    });
  });

  it('project IDs are unique', () => {
    const ids = projects.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe('skillCategories', () => {
  it('has 5 skill categories', () => {
    expect(skillCategories).toHaveLength(5);
  });

  it('each category has a name and at least one skill', () => {
    skillCategories.forEach((cat) => {
      expect(cat.name).toBeTruthy();
      expect(cat.skills.length).toBeGreaterThan(0);
    });
  });

  it('Python is listed in the Programming category', () => {
    const programming = skillCategories.find((c) => c.name === 'Programming');
    expect(programming).toBeDefined();
    expect(programming?.skills).toContain('Python');
  });

  it('TensorFlow is listed in Frameworks & Libraries', () => {
    const frameworks = skillCategories.find((c) => c.name === 'Frameworks & Libraries');
    expect(frameworks).toBeDefined();
    expect(frameworks?.skills).toContain('TensorFlow');
  });
});

describe('certifications', () => {
  it('has 5 certifications', () => {
    expect(certifications).toHaveLength(5);
  });

  it('each certification has a title and issuer', () => {
    certifications.forEach((cert) => {
      expect(cert.title).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
      expect(cert.year).toBeTruthy();
    });
  });

  it('includes HCIA-AI from Huawei Academy', () => {
    const hcia = certifications.find((c) => c.id === 'hcia-ai');
    expect(hcia).toBeDefined();
    expect(hcia?.issuer).toBe('Huawei Academy');
  });

  it('includes ALX Africa certifications', () => {
    const alxCerts = certifications.filter((c) => c.issuer === 'ALX Africa');
    expect(alxCerts.length).toBeGreaterThanOrEqual(4);
  });

  it('no certification has a fake credential URL', () => {
    // Credential URLs must be null (not set) or a real https URL
    certifications.forEach((cert) => {
      if (cert.credentialUrl !== null) {
        expect(cert.credentialUrl).toMatch(/^https:\/\//);
      }
    });
  });
});

describe('achievements', () => {
  it('has 2 Huawei ICT Competition achievements', () => {
    expect(achievements).toHaveLength(2);
  });

  it('includes a national-level First Prize', () => {
    const national = achievements.find((a) => a.level === 'national');
    expect(national).toBeDefined();
    expect(national?.prize).toBe('First Prize Winner');
  });

  it('includes a regional-level Third Prize', () => {
    const regional = achievements.find((a) => a.level === 'regional');
    expect(regional).toBeDefined();
    expect(regional?.prize).toBe('Third Prize Winner');
  });

  it('each achievement has required fields', () => {
    achievements.forEach((a) => {
      expect(a.competition).toBeTruthy();
      expect(a.track).toBeTruthy();
      expect(a.year).toBeTruthy();
      expect(a.description).toBeTruthy();
    });
  });
});

describe('education', () => {
  it('is University of Gondar', () => {
    expect(education.institution).toBe('University of Gondar');
  });

  it('is Computer Engineering', () => {
    expect(education.field).toBe('Computer Engineering');
  });

  it('has the correct GPA', () => {
    expect(education.gpa).toBe('3.15');
  });

  it('has the correct exit exam result', () => {
    expect(education.exitExam).toBe('73.75%');
  });
});
