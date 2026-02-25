export type Metric = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  title: string;
  points: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  domain: string;
  stack: string[];
  metrics: Metric[];
  diagramPath: string;
  sections: CaseStudySection[];
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  takeaways: string[];
  diagramPath: string;
  contentPath: string;
};

export type DesignDoc = {
  slug: string;
  title: string;
  context: string;
  decisions: string[];
  risks: string[];
  diagramPath: string;
};

export type Postmortem = {
  slug: string;
  title: string;
  incidentDate: string;
  impact: string;
  rootCause: string;
  actions: string[];
  diagramPath: string;
};
