"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { LayoutDashboard, Github, Trophy, Menu, BookOpen, FlaskConical, ChevronRight, AlertOctagon } from "lucide-react"
import { TopicSearch } from "@/components/topic-search"
import { useProgress } from "@/lib/progress-store"
import { masteryPath } from "@/lib/concepts-data"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function Navbar() {
  const { completed, isLoaded } = useProgress()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const totalConcepts = masteryPath.reduce((acc, phase) => acc + phase.items.length, 0)
  const percentage = isLoaded ? Math.round((completed.length / totalConcepts) * 100) : 0

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container-custom flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2.5 group shrink-0">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Cosmos<span className="text-primary">.</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold">
            <Link
              href="/concepts"
              className="transition-colors hover:text-primary text-muted-foreground flex items-center gap-2"
            >
              Concepts
              {mounted && percentage > 0 && (
                <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  <Trophy className="h-2.5 w-2.5" />
                  {percentage}%
                </span>
              )}
            </Link>
            <Link
              href="/errors"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Errors
            </Link>
            <Link
              href="/playground"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Playground
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <TopicSearch />
          </div>
          <div className="hidden sm:block h-4 w-px bg-border mx-1 md:mx-2" />
          <ModeToggle />
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/5">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0 border-r-primary/10">
              <div className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Access all Next.js Cosmos concepts and playground tools.
                </SheetDescription>
              </div>
              <div className="flex flex-col h-full bg-grid-premium">
                <div className="p-6 border-b bg-background/50 backdrop-blur-md">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2.5 group mb-2">
                    <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                      <LayoutDashboard className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                      Cosmos<span className="text-primary">.</span>
                    </span>
                  </Link>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                    The Next.js Visualizer
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  <div className="sm:hidden">
                    <TopicSearch />
                  </div>

                  <div className="space-y-1">
                    <Link
                      href="/concepts"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Concepts</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Mastery Path</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </Link>

                    <Link
                      href="/errors"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <AlertOctagon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Errors</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Common Pitfalls</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </Link>

                    <Link
                      href="/playground"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <FlaskConical className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Playground</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Interactive Lab</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </Link>
                  </div>

                  {mounted && percentage > 0 && (
                    <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-emerald-600" />
                          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Learning Progress</span>
                        </div>
                        <span className="text-xs font-black text-emerald-600">{percentage}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 transition-all duration-1000" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 border-t mt-auto bg-muted/30">
                  <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">
                    <span>Resources</span>
                  </div>
                  <Link 
                    href="https://github.com" 
                    className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
