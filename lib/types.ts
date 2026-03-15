export interface SyllabusUnit {
  title: string;
  content: string;
}

export interface FileLink {
  title: string;
  url: string;
  type: string;
}

export interface SubjectFrontmatter {
  title: string;
  code: string;
  year: number;
  branch: string;
  branchName: string;
  credits: number;
  units: SyllabusUnit[];
  practicalFiles?: FileLink[];
  pyqs?: FileLink[];
}

export interface Subject extends SubjectFrontmatter {
  slug: string;
}
