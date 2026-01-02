"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Lightbulb, HelpCircle, AlertCircle, ArrowLeft, CheckCircle2 } from "lucide-react"
import { RoutingVisualizer } from "@/components/visualizers/routing-visualizer"
import { RenderingVisualizer } from "@/components/visualizers/rendering-visualizer"
import { StreamingVisualizer } from "@/components/visualizers/streaming-visualizer"
import { RSCVisualizer } from "@/components/visualizers/rsc-visualizer"
import { HydrationVisualizer } from "@/components/visualizers/hydration-visualizer"
import { SSRVisualizer } from "@/components/visualizers/ssr-visualizer"
import { SSGVisualizer } from "@/components/visualizers/ssg-visualizer"
import { DataFlowVisualizer } from "@/components/visualizers/data-flow-visualizer"
import { BoundaryVisualizer } from "@/components/visualizers/boundary-visualizer"
import { LayoutTemplateVisualizer } from "@/components/visualizers/layout-template-visualizer"
import { ErrorVisualizer } from "@/components/visualizers/error-visualizer"
import { ParallelRoutesVisualizer } from "@/components/visualizers/parallel-routes-visualizer"
import { MiddlewareVisualizer } from "@/components/visualizers/middleware-visualizer"
import { RouteHandlerVisualizer } from "@/components/visualizers/route-handler-visualizer"
import { MetadataVisualizer } from "@/components/visualizers/metadata-visualizer"
import { NotFoundVisualizer } from "@/components/visualizers/not-found-visualizer"
import { InterceptingVisualizer } from "@/components/visualizers/intercepting-visualizer"
import { ISRVisualizer } from "@/components/visualizers/isr-visualizer"
import { CachingVisualizer } from "@/components/visualizers/caching-visualizer"
import { AdvancedCachingVisualizer } from "@/components/visualizers/advanced-caching-visualizer"
import { ImageVisualizer } from "@/components/visualizers/image-visualizer"
import { DeploymentVisualizer } from "@/components/visualizers/deployment-visualizer"
import { FetchOptionsVisualizer } from "@/components/visualizers/fetch-options-visualizer"
import { ServerActionVisualizer } from "@/components/visualizers/server-action-visualizer"
import { FormHandlingVisualizer } from "@/components/visualizers/form-handling-visualizer"
import { OptimisticVisualizer } from "@/components/visualizers/optimistic-visualizer"
import { PPRVisualizer } from "@/components/visualizers/ppr-visualizer"
import { SecurityVisualizer } from "@/components/visualizers/security-visualizer"
import { ConceptNavigation } from "@/components/concept-navigation"
import { Button } from "@/components/ui/button"
import { useProgress } from "@/lib/progress-store"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface ConceptLayoutProps {
  slug: string
  title: string
  category: string
  description: string
  mentalModel: string
  whyExists: string
  codeExample: string
  visualizerType: 'routing' | 'rendering' | 'streaming' | 'rsc' | 'hydration' | 'ssr' | 'ssg' | 'data-flow' | 'boundary' | 'layout-template' | 'error' | 'parallel' | 'middleware' | 'route-handler' | 'caching' | 'advanced-caching' | 'image' | 'deployment' | 'server-action' | 'form-handling' | 'optimistic' | 'ppr' | 'security' | 'not-found' | 'intercepting' | 'isr' | 'fetch-options' | 'metadata'
  visualizerProps?: any
  misconception?: string
}

export function ConceptLayout({
  slug,
  title,
  category,
  description,
  mentalModel,
  whyExists,
  codeExample,
  visualizerType,
  visualizerProps,
  misconception
}: ConceptLayoutProps) {
  const { isCompleted, toggleComplete, isLoaded } = useProgress()
  const [mounted, setMounted] = useState(false)
  const completed = isCompleted(slug)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header Area */}
      <div className="border-b py-20 bg-grid-premium bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
               <div>
                  <Link 
                    href="/concepts" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
                  >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Mastery Path
                  </Link>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">
                    <div className="h-px w-8 bg-primary/30" />
                    {category}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight flex items-center gap-4">
                    {title}
                  </h1>
               </div>
               
               <div className="flex-shrink-0">
                  <Button 
                    variant={completed ? "default" : "outline"}
                    size="lg"
                    className={cn(
                      "rounded-full px-8 py-6 text-base font-bold transition-all duration-500",
                      completed && "bg-emerald-600 hover:bg-emerald-700 border-emerald-600 shadow-lg shadow-emerald-500/20"
                    )}
                    onClick={() => toggleComplete(slug)}
                    disabled={!isLoaded}
                  >
                    {completed ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Mastered
                      </>
                    ) : (
                      "Mark as Mastered"
                    )}
                  </Button>
               </div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom -mt-10 relative z-10 space-y-8">
        
        {/* Row 1: Visualizer & Code Implementation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Visualizer Card */}
          <Card className="flex flex-col border-2 overflow-hidden shadow-xl bg-background/50 backdrop-blur-sm border-primary/10">
             <CardHeader className="bg-muted/30 pb-4 border-b">
                <div className="flex items-center justify-between">
                   <CardTitle className="flex items-center gap-2.5 text-base font-bold">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      Interactive Visualizer
                   </CardTitle>
                </div>
             </CardHeader>
             <CardContent className="p-0 flex-1 min-h-[500px] bg-background flex flex-col">
                <div className="flex-1">
                  {visualizerType === 'routing' && <RoutingVisualizer {...visualizerProps} />}
                  {visualizerType === 'rendering' && <RenderingVisualizer {...visualizerProps} />}
                  {visualizerType === 'streaming' && <StreamingVisualizer {...visualizerProps} />}
                  {visualizerType === 'rsc' && <RSCVisualizer {...visualizerProps} />}
                  {visualizerType === 'hydration' && <HydrationVisualizer {...visualizerProps} />}
                  {visualizerType === 'ssr' && <SSRVisualizer {...visualizerProps} />}
                  {visualizerType === 'ssg' && <SSGVisualizer {...visualizerProps} />}
                  {visualizerType === 'data-flow' && <DataFlowVisualizer {...visualizerProps} />}
                  {visualizerType === 'boundary' && <BoundaryVisualizer {...visualizerProps} />}
                  {visualizerType === 'layout-template' && <LayoutTemplateVisualizer {...visualizerProps} />}
                  {visualizerType === 'error' && <ErrorVisualizer {...visualizerProps} />}
                  {visualizerType === 'parallel' && <ParallelRoutesVisualizer {...visualizerProps} />}
                  {visualizerType === 'middleware' && <MiddlewareVisualizer {...visualizerProps} />}
                  {visualizerType === 'route-handler' && <RouteHandlerVisualizer {...visualizerProps} />}
                  {visualizerType === 'metadata' && <MetadataVisualizer {...visualizerProps} />}
                  {visualizerType === 'caching' && <CachingVisualizer {...visualizerProps} />}
                  {visualizerType === 'advanced-caching' && <AdvancedCachingVisualizer {...visualizerProps} />}
                  {visualizerType === 'image' && <ImageVisualizer {...visualizerProps} />}
                  {visualizerType === 'deployment' && <DeploymentVisualizer {...visualizerProps} />}
                  {visualizerType === 'fetch-options' && <FetchOptionsVisualizer {...visualizerProps} />}
                  {visualizerType === 'server-action' && <ServerActionVisualizer {...visualizerProps} />}
                  {visualizerType === 'form-handling' && <FormHandlingVisualizer {...visualizerProps} />}
                  {visualizerType === 'optimistic' && <OptimisticVisualizer {...visualizerProps} />}
                  {visualizerType === 'ppr' && <PPRVisualizer {...visualizerProps} />}
                  {visualizerType === 'security' && <SecurityVisualizer {...visualizerProps} />}
                  {visualizerType === 'not-found' && <NotFoundVisualizer {...visualizerProps} />}
                  {visualizerType === 'intercepting' && <InterceptingVisualizer {...visualizerProps} />}
                  {visualizerType === 'isr' && <ISRVisualizer {...visualizerProps} />}
                </div>
             </CardContent>
          </Card>

          {/* Code Implementation Card */}
          <Card className="flex flex-col overflow-hidden border-zinc-800 bg-zinc-950 text-white shadow-xl shadow-black/20">
             <CardHeader className="bg-zinc-900/50 pb-4 border-b border-white/5">
                <CardTitle className="flex items-center gap-2.5 text-base font-bold text-zinc-100">
                   <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <Code className="h-4 w-4 text-zinc-300" />
                   </div>
                   Implementation
                </CardTitle>
             </CardHeader>
             <CardContent className="p-0 flex-1 relative min-h-[500px]">
                <pre className="p-6 text-sm font-mono leading-relaxed h-full overflow-auto text-zinc-300">
                  <code>{codeExample}</code>
                </pre>
             </CardContent>
          </Card>

        </div>

        {/* Row 2: Understanding & Context */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
           {/* Mental Model */}
           <Card className="bg-muted/30 border-border hover:bg-background transition-colors">
              <CardHeader className="pb-3">
                 <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                    </div>
                    Mental Model
                 </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                 {mentalModel}
              </CardContent>
           </Card>

           {/* Why Exists */}
           <Card className="bg-primary/5 border-primary/10 hover:bg-primary/10 transition-colors">
              <CardHeader className="pb-3">
                 <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    Why this exists?
                 </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                 {whyExists}
              </CardContent>
           </Card>

           {/* Critical Note */}
           <Card className="border-dashed border-red-500/20 bg-red-500/5">
              <CardHeader className="pb-3">
                 <CardTitle className="flex items-center gap-3 text-lg text-red-600 dark:text-red-400">
                    <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                    Critical Note
                 </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-red-700/80 dark:text-red-400/80 leading-relaxed italic">
                 "{misconception || "Developers often confuse this with traditional React patterns. Use the visualizer to see the true Next.js behavior."}"
              </CardContent>
           </Card>

        </div>
        
        {/* Navigation below the grid */}
        <div className="pt-8">
           <ConceptNavigation currentSlug={slug} />
        </div>
      </div>
    </div>
  )
}