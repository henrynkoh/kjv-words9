# KJV Words — Manual

KJV Words organizes KJV Bible verses by **topic/category** for **discussing and spreading words of truth** depending on **audiences**, **situations**, and **level of intelligence and knowledge on Bible verses**. Format and style follow [kjv-faith-ai](https://github.com/henrynkoh/kjv-faith-ai).

## Home page

- Title: Rightly Dividing the Word of Truth
- 2 Timothy 2:15 KJV
- Short explanation: verses by topic for use by audience, situation, and knowledge level
- List of topics with audience/situation/level hints and verse count

## Topic page

- Topic title and description
- Suggested audience, situation, knowledge level
- All verses in that topic: theme, Korean summary, reference, KJV text

## Data

Edit `src/lib/verses.ts` to change topics or verses. Each topic can include:

- `audienceSuggestions` — e.g. believers, seekers, new believers
- `situationSuggestions` — e.g. evangelism, teaching, comfort
- `knowledgeLevel` — any, beginner, moderate, deeper

## Commands

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — run production build
