export interface InterviewStats {
  mcpServers: number;
  activeAgents: number;
  savedPerDay: string;
  automations: number;
}

export interface Interview {
  title: string;
  slug: string;
  name: string;
  handle: string;
  role: string;
  location: string;
  date: string;
  number: number;
  tags: string[];
  tools: string[];
  pullQuote: string;
  stats: InterviewStats;
  content: string;
}

export interface ToolCompatibility {
  name: string;
  status: 'ok' | 'warn' | 'no';
}

export interface Tool {
  title: string;
  slug: string;
  icon: string;
  category: string;
  type: string;
  license: string;
  installCmd: string;
  description: string;
  makers: number;
  capabilities: string[];
  version: string;
  compatibility: ToolCompatibility[];
  content: string;
}

export interface Recipe {
  title: string;
  slug: string;
  category: string;
  steps: number;
  setupTime: string;
  timeSaved: string;
  difficulty: string;
  tools: string[];
  contributor: string;
  contributorSlug: string;
  content: string;
}

export interface Blueprint {
  title: string;
  slug: string;
  category: string;
  steps: number;
  setupTime: string;
  timeSaved: string;
  difficulty: string;
  tools: string[];
  contributor: string;
  contributorSlug: string;
  complexity: string;
  useCase: string;
  patterns: string[];
  tradeoffs: string;
  content: string;
}

export type FieldNote = Interview;
export type StackItem = Tool;
