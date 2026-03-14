import Link from "next/link";
import { topics } from "@/lib/verses";
import { BookOpen, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground tracking-tight">
        Rightly Dividing the Word of Truth
      </h1>
      <p className="mt-3 text-lg text-foreground/80 italic">
        &ldquo;Study to shew thyself approved unto God, a workman that needeth not to be
        ashamed, rightly dividing the word of truth.&rdquo;
      </p>
      <p className="mt-1 text-sm text-foreground/60">— 2 Timothy 2:15 KJV</p>

      <div className="mt-8 p-5 rounded-xl border border-foreground/10 bg-foreground/[0.03]">
        <p className="text-foreground/90 leading-relaxed">
          KJV Bible verses under a certain topic or category, for{" "}
          <strong>discussing and spreading words of truth</strong> depending on{" "}
          <strong>audiences</strong>, <strong>situations</strong>, and{" "}
          <strong>level of intelligence and knowledge on Bible verses</strong>.
        </p>
        <p className="mt-2 text-sm text-foreground/70">
          Choose a topic below. Each topic suggests which audience and situation it fits,
          and whether it suits beginner, moderate, or deeper Bible knowledge.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-foreground">
        Topics &amp; Categories
      </h2>
      <p className="mt-1 text-foreground/70">
        Click a topic to see all verses (KJV + Korean summary). Use by audience,
        situation, and knowledge level.
      </p>

      <ul className="mt-6 space-y-3">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              href={`/topic/${topic.id}`}
              className="flex items-center justify-between gap-4 rounded-lg border border-foreground/10 bg-background px-4 py-4 hover:bg-foreground/[0.04] hover:border-foreground/20 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <BookOpen className="h-5 w-5 text-foreground/60 shrink-0" aria-hidden />
                <div className="min-w-0">
                  <span className="font-medium text-foreground group-hover:underline">
                    {topic.title}
                  </span>
                  {topic.description && (
                    <p className="mt-0.5 text-sm text-foreground/65 line-clamp-1">
                      {topic.description}
                    </p>
                  )}
                  <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-foreground/55">
                    {topic.audienceSuggestions && topic.audienceSuggestions.length > 0 && (
                      <span>Audience: {topic.audienceSuggestions.join(", ")}</span>
                    )}
                    {topic.situationSuggestions && topic.situationSuggestions.length > 0 && (
                      <span>Situation: {topic.situationSuggestions.join(", ")}</span>
                    )}
                    {topic.knowledgeLevel && (
                      <span>Level: {topic.knowledgeLevel}</span>
                    )}
                  </div>
                </div>
              </div>
              <span className="shrink-0 text-sm text-foreground/60">
                {topic.verses.length} verse{topic.verses.length !== 1 ? "s" : ""}
              </span>
              <ChevronRight className="h-4 w-4 text-foreground/50 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
