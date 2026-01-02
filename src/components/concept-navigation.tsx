import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getNavigation } from "@/lib/concepts-data"

export function ConceptNavigation({ currentSlug }: { currentSlug: string }) {
  const { prev, next } = getNavigation(currentSlug)

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-12 border-t mt-12 w-full">
      <div className="flex-1 flex justify-start">
        {prev && (
          <Link
            href={`/concepts/${prev.slug}`}
            className="w-full sm:w-auto flex items-center gap-4 p-4 rounded-2xl border border-border hover:bg-muted transition-all group"
          >
            <div className="h-10 w-10 rounded-xl bg-muted group-hover:bg-background flex items-center justify-center transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Previous Topic</span>
              <span className="font-semibold text-sm">{prev.name}</span>
            </div>
          </Link>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {next && (
          <Link
            href={`/concepts/${next.slug}`}
            className="w-full sm:w-auto flex items-center justify-between gap-4 p-4 rounded-2xl border border-border hover:border-primary/30 hover:bg-background transition-all group text-right"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Next Topic</span>
              <span className="font-semibold text-sm">{next.name}</span>
            </div>
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <ChevronRight className="h-5 w-5" />
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}