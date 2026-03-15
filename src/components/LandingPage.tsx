"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { TopicCategory } from "@/lib/verses";
import {
  BookOpen,
  ChevronRight,
  Github,
  Sparkles,
  Layers,
  Globe,
  Heart,
  Quote,
  Users,
  Target,
  BookMarked,
} from "lucide-react";

const FIXED_NAV = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features & Functions" },
  { id: "verse-sample", label: "Verse sample" },
  { id: "footer", label: "Footer" },
];

const AUDIENCES = ["believers", "seekers", "new believers", "mature", "mixed", "children"] as const;
const SITUATIONS = ["evangelism", "teaching", "comfort", "correction", "devotion", "worship", "counsel"] as const;
const KNOWLEDGE_LEVELS = ["any", "beginner", "moderate", "deeper"] as const;

const FEATURES = [
  {
    icon: Layers,
    title: "By topic",
    desc: "8 categories from Creation & Redemption to Daily Walk.",
    color: "from-violet-500 to-purple-600",
    sectionId: "topics",
  },
  {
    icon: Users,
    title: "By audience",
    desc: "Pick verses for believers, seekers, new believers, mature, mixed, or children.",
    color: "from-cyan-500 to-blue-600",
    sectionId: "by-audience",
  },
  {
    icon: Target,
    title: "By situation",
    desc: "Evangelism, teaching, comfort, correction, devotion, worship, or counsel.",
    color: "from-amber-500 to-orange-600",
    sectionId: "by-situation",
  },
  {
    icon: BookMarked,
    title: "By knowledge level",
    desc: "Any, beginner, moderate, or deeper Bible knowledge.",
    color: "from-emerald-500 to-teal-600",
    sectionId: "by-knowledge-level",
  },
  {
    icon: Globe,
    title: "KJV + Korean",
    desc: "Each verse has a Korean summary for bilingual sharing.",
    color: "from-rose-500 to-pink-600",
    sectionId: "kjv-korean",
  },
  {
    icon: Heart,
    title: "Free & simple",
    desc: "No sign-up. Use for study, teaching, or spreading words of truth.",
    color: "from-indigo-500 to-violet-600",
    sectionId: "about",
  },
];

const GITHUB_URL =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_GITHUB_URL
    ? process.env.NEXT_PUBLIC_GITHUB_URL
    : "https://github.com/henrynkoh/kjv-words9";

const TOPIC_GRADIENTS = [
  "from-blue-500/25 to-indigo-600/25 border-blue-400/40 hover:border-blue-400/60",
  "from-emerald-500/25 to-teal-600/25 border-emerald-400/40 hover:border-emerald-400/60",
  "from-violet-500/25 to-purple-600/25 border-violet-400/40 hover:border-violet-400/60",
  "from-amber-500/25 to-orange-600/25 border-amber-400/40 hover:border-amber-400/60",
  "from-rose-500/25 to-pink-600/25 border-rose-400/40 hover:border-rose-400/60",
  "from-cyan-500/25 to-sky-600/25 border-cyan-400/40 hover:border-cyan-400/60",
  "from-lime-500/25 to-green-600/25 border-lime-400/40 hover:border-lime-400/60",
  "from-fuchsia-500/25 to-purple-600/25 border-fuchsia-400/40 hover:border-fuchsia-400/60",
];

interface Props {
  topics: TopicCategory[];
}

export default function LandingPage({ topics }: Props) {
  const [activeId, setActiveId] = useState<string>("hero");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [topics]);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const navItems = [
    ...FIXED_NAV.slice(0, 2),
    { id: "topics", label: "Topics" },
    ...topics.map((t) => ({ id: t.id, label: t.title })),
    { id: "features", label: "Features & Functions" },
    { id: "by-audience", label: "By audience" },
    { id: "by-situation", label: "By situation" },
    { id: "by-knowledge-level", label: "By knowledge level" },
    { id: "kjv-korean", label: "KJV + Korean" },
    { id: "verse-sample", label: "Verse sample" },
    { id: "footer", label: "Footer" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left sidebar - scrollable nav */}
      <aside
        className="sticky top-0 h-screen w-56 sm:w-64 shrink-0 border-r border-foreground/10 bg-background/98 backdrop-blur-xl flex flex-col shadow-[2px_0_24px_-8px_rgba(0,0,0,0.08)] dark:shadow-[2px_0_24px_-8px_rgba(0,0,0,0.3)]"
        aria-label="Page navigation"
      >
        <div className="p-4 border-b border-foreground/10">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-foreground hover:opacity-90 transition-opacity"
          >
            <BookOpen className="h-6 w-6 text-[var(--accent)]" />
            KJV Words
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-3 px-2 scrollbar-thin">
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const isTopic = topics.some((t) => t.id === item.id);
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block rounded-xl px-3 py-2 text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--accent)]/15 text-[var(--accent)] font-medium"
                        : "text-foreground/75 hover:bg-foreground/10 hover:text-foreground"
                    } ${isTopic ? "pl-4" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Hero */}
        <section
          id="hero"
          ref={setRef("hero")}
          className="relative px-6 sm:px-10 py-20 sm:py-28 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/20 via-transparent to-[var(--gradient-to)]/20 pointer-events-none" />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[var(--accent)]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Rightly Dividing the{" "}
              <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                Word of Truth
              </span>
            </h1>
            <p className="mt-5 text-xl text-foreground/85 italic">
              &ldquo;Study to shew thyself approved unto God, a workman that needeth not
              to be ashamed, rightly dividing the word of truth.&rdquo;
            </p>
            <p className="mt-2 text-sm text-foreground/60">— 2 Timothy 2:15 KJV</p>
            <p className="mt-6 text-foreground/80 max-w-2xl leading-relaxed">
              KJV verses by topic with Korean summaries — for discussing and spreading
              words of truth depending on <strong>audiences</strong>,{" "}
              <strong>situations</strong>, and{" "}
              <strong>level of intelligence and knowledge on Bible verses</strong>.
            </p>
            <Link
              href="#topics"
              className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-medium shadow-lg hover:opacity-95 hover:shadow-xl transition-all"
            >
              Browse topics
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          ref={setRef("about")}
          className="px-6 sm:px-10 py-16 bg-foreground/[0.04]"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-7 w-7 text-[var(--accent)]" />
              About KJV Words
            </h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              A free resource that organizes King James Version (KJV) Bible verses by
              topic. Each verse includes a Korean summary. Use it for discussing and
              spreading words of truth depending on your <strong>audience</strong>,{" "}
              <strong>situation</strong>, and their <strong>level of Bible knowledge</strong>.
            </p>
          </div>
        </section>

        {/* Topics intro */}
        <section
          id="topics"
          ref={setRef("topics")}
          className="px-6 sm:px-10 pt-16 pb-4 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Topics &amp; Categories
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Click any topic to see all verses (KJV + Korean). Use by audience, situation,
            and knowledge level.
          </p>
        </section>

        {/* One sub-section per topic */}
        {topics.map((topic, i) => (
          <section
            key={topic.id}
            id={topic.id}
            ref={setRef(topic.id)}
            className="px-6 sm:px-10 py-10 scroll-mt-24"
          >
            <div
              className={`rounded-2xl border-2 bg-gradient-to-br ${TOPIC_GRADIENTS[i % TOPIC_GRADIENTS.length]} p-6 transition-all duration-300`}
            >
              <Link href={`/topic/${topic.id}`} className="group block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                      {topic.title}
                    </h3>
                    {topic.description && (
                      <p className="mt-1 text-sm text-foreground/70 line-clamp-2">
                        {topic.description}
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-foreground/60">
                      {topic.audienceSuggestions?.length ? (
                        <span>Audience: {topic.audienceSuggestions.join(", ")}</span>
                      ) : null}
                      {topic.situationSuggestions?.length ? (
                        <span>Situation: {topic.situationSuggestions.join(", ")}</span>
                      ) : null}
                      {topic.knowledgeLevel && (
                        <span>Level: {topic.knowledgeLevel}</span>
                      )}
                    </div>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-foreground/60">
                      {topic.verses.length} verse{topic.verses.length !== 1 ? "s" : ""}
                      <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                  <span className="shrink-0 rounded-lg bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground/80 group-hover:bg-background">
                    View all
                  </span>
                </div>
              </Link>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {topic.verses.slice(0, 2).map((verse) => (
                  <div
                    key={verse.id}
                    className="rounded-xl border border-foreground/10 bg-background/60 p-4"
                  >
                    <p className="text-xs font-medium text-foreground/70">
                      {verse.theme}
                    </p>
                    <p className="mt-1 text-sm text-foreground/80" lang="ko">
                      {verse.korean}
                    </p>
                    <p className="mt-1 text-xs font-mono text-foreground/60">
                      {verse.ref}
                    </p>
                    <blockquote className="mt-2 pl-3 border-l-2 border-foreground/20 text-foreground/90 text-sm italic line-clamp-2">
                      &ldquo;{verse.text}&rdquo;
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Features & Functions */}
        <section
          id="features"
          ref={setRef("features")}
          className="px-6 sm:px-10 py-16 bg-foreground/[0.04]"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-[var(--accent)]" />
            Features &amp; Functions
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Choose verses by audience, situation, and knowledge level for discussing and
            spreading words of truth.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {FEATURES.map((f) => (
              <a
                key={f.title}
                href={`#${f.sectionId}`}
                className="flex gap-4 rounded-2xl border border-foreground/10 bg-background p-5 hover:border-foreground/20 hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow`}
                >
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{f.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* By audience — all related content */}
        <section
          id="by-audience"
          ref={setRef("by-audience")}
          className="px-6 sm:px-10 py-16 bg-foreground/[0.04] scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Users className="h-7 w-7 text-[var(--accent)]" />
            By audience
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Topics and verses by who you&apos;re speaking to. Click a topic to see all verses.
          </p>
          <div className="space-y-8">
            {AUDIENCES.map((audience) => {
              const matching = topics.filter((t) =>
                t.audienceSuggestions?.some((a) => a === audience)
              );
              if (matching.length === 0) return null;
              return (
                <div key={audience} className="rounded-xl border border-foreground/10 bg-background p-5">
                  <h3 className="font-semibold text-foreground capitalize">{audience.replace(/-/g, " ")}</h3>
                  <ul className="mt-3 space-y-2">
                    {matching.map((t) => (
                      <li key={t.id}>
                        <Link
                          href={`/topic/${t.id}`}
                          className="text-foreground/85 hover:underline flex items-center gap-2"
                        >
                          {t.title}
                          <span className="text-xs text-foreground/55">({t.verses.length} verses)</span>
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* By situation — all related content */}
        <section
          id="by-situation"
          ref={setRef("by-situation")}
          className="px-6 sm:px-10 py-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Target className="h-7 w-7 text-[var(--accent)]" />
            By situation
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Topics and verses by context: evangelism, teaching, comfort, and more.
          </p>
          <div className="space-y-8">
            {SITUATIONS.map((situation) => {
              const matching = topics.filter((t) =>
                t.situationSuggestions?.some((s) => s === situation)
              );
              if (matching.length === 0) return null;
              return (
                <div key={situation} className="rounded-xl border border-foreground/10 bg-background p-5">
                  <h3 className="font-semibold text-foreground capitalize">{situation}</h3>
                  <ul className="mt-3 space-y-2">
                    {matching.map((t) => (
                      <li key={t.id}>
                        <Link
                          href={`/topic/${t.id}`}
                          className="text-foreground/85 hover:underline flex items-center gap-2"
                        >
                          {t.title}
                          <span className="text-xs text-foreground/55">({t.verses.length} verses)</span>
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* By knowledge level — all related content */}
        <section
          id="by-knowledge-level"
          ref={setRef("by-knowledge-level")}
          className="px-6 sm:px-10 py-16 bg-foreground/[0.04] scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <BookMarked className="h-7 w-7 text-[var(--accent)]" />
            By knowledge level
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Topics by level of Bible knowledge. Click a topic to see all verses.
          </p>
          <div className="space-y-8">
            {KNOWLEDGE_LEVELS.map((level) => {
              const matching = topics.filter((t) => t.knowledgeLevel === level);
              if (matching.length === 0) return null;
              return (
                <div key={level} className="rounded-xl border border-foreground/10 bg-background p-5">
                  <h3 className="font-semibold text-foreground capitalize">{level}</h3>
                  <ul className="mt-3 space-y-2">
                    {matching.map((t) => (
                      <li key={t.id}>
                        <Link
                          href={`/topic/${t.id}`}
                          className="text-foreground/85 hover:underline flex items-center gap-2"
                        >
                          {t.title}
                          <span className="text-xs text-foreground/55">({t.verses.length} verses)</span>
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* KJV + Korean — verse format examples (all related content) */}
        <section
          id="kjv-korean"
          ref={setRef("kjv-korean")}
          className="px-6 sm:px-10 py-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Globe className="h-7 w-7 text-[var(--accent)]" />
            KJV + Korean
          </h2>
          <p className="text-foreground/70 mb-6 max-w-2xl">
            Every verse appears with theme, Korean summary, reference, and full KJV text. Examples from different topics:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-5xl">
            {topics.slice(0, 6).map((topic, i) =>
              topic.verses[0] ? (
                <div
                  key={topic.id}
                  className={`rounded-xl border-2 bg-gradient-to-br ${TOPIC_GRADIENTS[i % TOPIC_GRADIENTS.length]} p-4`}
                >
                  <p className="text-xs font-medium text-foreground/70">{topic.verses[0].theme}</p>
                  <p className="mt-1 text-sm text-foreground/80" lang="ko">
                    {topic.verses[0].korean}
                  </p>
                  <p className="mt-1 text-xs font-mono text-foreground/60">{topic.verses[0].ref}</p>
                  <blockquote className="mt-2 pl-3 border-l-2 border-foreground/20 text-foreground/90 text-sm italic">
                    &ldquo;{topic.verses[0].text}&rdquo;
                  </blockquote>
                  <Link
                    href={`/topic/${topic.id}`}
                    className="mt-2 inline-flex items-center gap-1 text-xs text-foreground/70 hover:underline"
                  >
                    All in {topic.title}
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              ) : null
            )}
          </div>
        </section>

        {/* Verse sample (kept for nav) */}
        <section
          id="verse-sample"
          ref={setRef("verse-sample")}
          className="px-6 sm:px-10 py-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Quote className="h-7 w-7 text-[var(--accent)]" />
            Verse sample
          </h2>
          <p className="text-foreground/70 mb-6">
            Single verse example — theme, Korean summary, reference, and full KJV text.
          </p>
          <div className="max-w-2xl rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--accent-soft)]/40 p-6 shadow-inner">
            <p className="text-sm font-medium text-foreground/80">
              Creation through Him
            </p>
            <p className="mt-1 text-foreground/70 text-sm" lang="ko">
              이 세상 모든 것은 그가 없이는 창조된 것이 없다
            </p>
            <p className="mt-2 text-xs font-mono text-foreground/60">John 1:3</p>
            <blockquote className="mt-3 pl-4 border-l-2 border-[var(--accent)] text-foreground italic">
              &ldquo;All things were made by him; and without him was not any thing made
              that was made.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <section
          id="footer"
          ref={setRef("footer")}
          className="px-6 sm:px-10 py-12 border-t border-foreground/10"
        >
          <div className="max-w-3xl text-sm text-foreground/70">
            <p>
              &copy; {new Date().getFullYear()} KJV Words. Built for spreading words of
              truth.
            </p>
            <p className="mt-1">KJV Bible &middot; 2 Timothy 2:15</p>
          </div>
        </section>
      </div>

      {/* Bottom-right: GitHub link */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-3 text-sm font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
        aria-label="Open repository on GitHub"
      >
        <Github className="h-5 w-5" />
        GitHub
      </a>
    </div>
  );
}
