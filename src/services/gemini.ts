// Strict TypeScript interfaces for the module response schemas

export interface Persona {
  name: string;
  age: number | string;
  occupation: string;
  goals: string[];
  frustrations: string[];
  quote: string;
  keyFeature: string;
}

export interface PersonasData {
  personas: Persona[];
}

export interface JtbdItem {
  situation: string;
  motivation: string;
  outcome: string;
  type: string; // Functional, Emotional, or Social
}

export interface JtbdData {
  jobs: JtbdItem[];
}

export interface JourneyStage {
  name: string;
  actions: string[];
  thoughts: string;
  emotion: number | string; // 1-10 satisfaction score
  painPoints: string[];
  opportunities: string[];
}

export interface UserJourneyData {
  stages: JourneyStage[];
}

export interface BusinessCanvas {
  keyPartners: string[];
  keyActivities: string[];
  keyResources: string[];
  valuePropositions: string[];
  customerRelationships: string[];
  channels: string[];
  customerSegments: string[];
  costStructure: string[];
  revenueStreams: string[];
}

export interface BusinessModelData {
  canvas: BusinessCanvas;
}

export interface FeatureIdea {
  name: string;
  problem: string;
  persona: string;
  effort: string; // S / M / L
  impact: string; // Low / Med / High
  rationale: string;
}

export interface FeatureIdeasData {
  features: FeatureIdea[];
}

export interface SamplePrd {
  problem: string;
  goal: string;
  metrics: string[];
  userStories: string[];
  inScope: string[];
  outOfScope: string[];
  risks: string[];
}

export interface SamplePrdData {
  prd: SamplePrd;
}

export interface TimelineEvent {
  year: string | number;
  event: string;
}

export interface HistoryData {
  timeline: TimelineEvent[];
}

// Global helper to make the API call to Gemini with structured JSON output configurations and multi-layered fallbacks
async function queryGemini(prompt: string, apiKey: string): Promise<any> {
  const endpoints = [
    { url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, name: 'v1beta / gemini-1.5-flash' },
    { url: `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, name: 'v1 / gemini-1.5-flash' },
    { url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, name: 'v1beta / gemini-1.5-flash-latest' },
    { url: `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, name: 'v1 / gemini-1.5-flash-latest' },
    { url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`, name: 'v1beta / gemini-1.5-pro' }
  ];

  let lastError: Error | null = null;

  for (const endpoint of endpoints) {
    try {
      console.log(`Attempting Gemini API request: ${endpoint.name}`);
      const response = await fetch(endpoint.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.25 // Slightly lower temperature for structural alignment
          }
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson?.error?.message || `HTTP ${response.status}`);
      }

      const resJson = await response.json();
      const rawText = resJson?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawText) {
        throw new Error('Received empty text content from candidate response.');
      }

      return JSON.parse(rawText.trim());
    } catch (err: any) {
      console.warn(`Gemini endpoint fallback [${endpoint.name}] failed:`, err.message);
      lastError = err;
      // Continue loop to try next fallback option
    }
  }

  // If all fallback routes failed, throw the final encountered error
  throw lastError || new Error('All configured Gemini endpoints failed. Please check your network and API key settings.');
}


// 1. PERSONAS API CALL
export async function generatePersonas(company: string, apiKey: string): Promise<PersonasData> {
  const prompt = `Generate 3 detailed user personas for ${company}'s core product. For each: name, age, occupation, goals, frustrations, tech-savviness, a representative quote, and which product feature they'd use most.
  Return ONLY valid JSON matching this schema:
  {
    "personas": [
      {
        "name": "string",
        "age": "number or string",
        "occupation": "string",
        "goals": ["string"],
        "frustrations": ["string"],
        "quote": "string",
        "keyFeature": "string"
      }
    ]
  }`;
  return queryGemini(prompt, apiKey);
}

// 2. JTBD API CALL
export async function generateJtbd(company: string, apiKey: string): Promise<JtbdData> {
  const prompt = `List the top 5 Jobs To Be Done for ${company}'s users, in the format 'When [situation], I want to [motivation], so I can [outcome].' Include functional, emotional, and social jobs.
  Return ONLY valid JSON matching this schema:
  {
    "jobs": [
      {
        "situation": "string starting with 'When ...'",
        "motivation": "string starting with 'I want to ...'",
        "outcome": "string starting with 'so I can ...'",
        "type": "string (Functional | Emotional | Social)"
      }
    ]
  }`;
  return queryGemini(prompt, apiKey);
}

// 3. USER JOURNEY API CALL
export async function generateUserJourney(company: string, apiKey: string): Promise<UserJourneyData> {
  const prompt = `Map a 6-stage user journey for a first-time ${company} user: Awareness, Consideration, Onboarding, Core Use, Retention, Advocacy. For each stage give: user actions, thoughts, emotions (1-10 satisfaction score), pain points, opportunities.
  Return ONLY valid JSON matching this schema:
  {
    "stages": [
      {
        "name": "string (Awareness | Consideration | Onboarding | Core Use | Retention | Advocacy)",
        "actions": ["string"],
        "thoughts": "string",
        "emotion": "number from 1 to 10",
        "painPoints": ["string"],
        "opportunities": ["string"]
      }
    ]
  }`;
  return queryGemini(prompt, apiKey);
}

// 4. BUSINESS MODEL API CALL
export async function generateBusinessModel(company: string, apiKey: string): Promise<BusinessModelData> {
  const prompt = `Generate a Business Model Canvas for ${company}: key partners, key activities, key resources, value propositions, customer relationships, channels, customer segments, cost structure, revenue streams. Provide 1-3 concise bullets for each block.
  Return ONLY valid JSON matching this schema:
  {
    "canvas": {
      "keyPartners": ["string"],
      "keyActivities": ["string"],
      "keyResources": ["string"],
      "valuePropositions": ["string"],
      "customerRelationships": ["string"],
      "channels": ["string"],
      "customerSegments": ["string"],
      "costStructure": ["string"],
      "revenueStreams": ["string"]
    }
  }`;
  return queryGemini(prompt, apiKey);
}

// 5. FEATURE IDEAS API CALL
export async function generateFeatureIdeas(company: string, apiKey: string): Promise<FeatureIdeasData> {
  const prompt = `Suggest 8 new feature ideas for ${company} that address real user pain points. For each: feature name, problem it solves, target persona, effort (S/M/L), impact (Low/Med/High), one-line rationale.
  Return ONLY valid JSON matching this schema:
  {
    "features": [
      {
        "name": "string",
        "problem": "string",
        "persona": "string",
        "effort": "string (S | M | L)",
        "impact": "string (Low | Med | High)",
        "rationale": "string"
      }
    ]
  }`;
  return queryGemini(prompt, apiKey);
}

// 6. SAMPLE PRD API CALL
export async function generateSamplePrd(company: string, apiKey: string): Promise<SamplePrdData> {
  const prompt = `Write a lean one-page PRD for the single highest-impact feature idea above for ${company}. Include: problem statement, goal, success metrics, user stories (3), scope (in/out), risks.
  Return ONLY valid JSON matching this schema:
  {
    "prd": {
      "problem": "string",
      "goal": "string",
      "metrics": ["string"],
      "userStories": ["string"],
      "inScope": ["string"],
      "outOfScope": ["string"],
      "risks": ["string"]
    }
  }`;
  return queryGemini(prompt, apiKey);
}

// 7. HISTORY API CALL
export async function generateHistory(company: string, apiKey: string): Promise<HistoryData> {
  const prompt = `Give a concise timeline of ${company}'s key milestones: founding, major pivots, funding rounds, product launches, notable controversies or failures. Provide 6-10 events, each exactly 1 line with a year.
  Return ONLY valid JSON matching this schema:
  {
    "timeline": [
      {
        "year": "number or string (e.g. 2018)",
        "event": "string"
      }
    ]
  }`;
  return queryGemini(prompt, apiKey);
}
