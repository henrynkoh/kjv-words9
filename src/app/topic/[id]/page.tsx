import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic } from "@/lib/verses";
import { BookOpen, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function TopicPage({ params }: Props) {
  const { id } = await params;
  const topic = getTopic(id);
  if (!topic) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        All topics
      </Link>

      <div className="flex items-start gap-3">
        <BookOpen className="h-7 w-7 text-foreground/70 shrink-0 mt-0.5" aria-hidden />
        <div>
          <h1 className="text-2xl font-bold text-foreground">{topic.title}</h1>
          {topic.description && (
            <p className="mt-1 text-foreground/75">{topic.description}</p>
          )}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/65">
            {topic.audienceSuggestions && topic.audienceSuggestions.length > 0 && (
              <span><strong>Audience:</strong> {topic.audienceSuggestions.join(", ")}</span>
            )}
            {topic.situationSuggestions && topic.situationSuggestions.length > 0 && (
              <span><strong>Situation:</strong> {topic.situationSuggestions.join(", ")}</span>
            )}
            {topic.knowledgeLevel && (
              <span><strong>Level:</strong> {topic.knowledgeLevel}</span>
            )}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground/70">
        Use these verses for discussing and spreading words of truth according to your
        audience, situation, and their level of Bible knowledge.
      </p>

      <ul className="mt-8 space-y-6">
        {topic.verses.map((verse) => (
          <li
            key={verse.id}
            className="rounded-lg border border-foreground/10 bg-foreground/[0.02] p-4 sm:p-5"
          >
            <p className="text-sm font-medium text-foreground/85">{verse.theme}</p>
            <p className="mt-1 text-foreground/75 text-sm" lang="ko">
              {verse.korean}
            </p>
            <p className="mt-2 text-xs font-mono text-foreground/60">{verse.ref}</p>
            <blockquote className="mt-2 pl-4 border-l-2 border-foreground/20 text-foreground italic">
              &ldquo;{verse.text}&rdquo;
            </blockquote>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-10 text-sm text-foreground/70 hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all topics
      </Link>
    </div>
  );
}
