
"use client";

import { useState } from 'react';
import { Sparkles, Loader2, Check, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { refineContentWithAI } from '@/ai/flows/refine-content-with-ai-flow';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from '@/components/ui/textarea';

interface AIContentRefinerProps {
  initialContent: string;
  context?: string;
  onApply: (refined: string) => void;
}

export default function AIContentRefiner({ initialContent, context, onApply }: AIContentRefinerProps) {
  const [content, setContent] = useState(initialContent);
  const [refined, setRefined] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleRefine = async () => {
    setLoading(true);
    try {
      const result = await refineContentWithAI({ content, context });
      setRefined(result.refinedContent);
    } catch (error) {
      console.error("AI Refinement failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = () => {
    onApply(refined);
    setOpen(false);
    setRefined("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 border-primary/20 hover:border-primary">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Refine with AI</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Content Lab
          </DialogTitle>
          <DialogDescription>
            Improve your project description for maximum impact and conciseness.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Original Text</label>
            <Textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] resize-none"
              placeholder="Enter text to refine..."
            />
          </div>

          {refined && (
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">AI Refined Version</label>
              <div className="p-4 rounded-md border bg-primary/5 border-primary/20 text-sm leading-relaxed whitespace-pre-wrap">
                {refined}
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="flex items-center gap-2">
          {!refined ? (
            <Button 
              onClick={handleRefine} 
              disabled={loading || !content.trim()}
              className="w-full"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2" />}
              Refine Content
            </Button>
          ) : (
            <>
              <Button variant="ghost" onClick={() => setRefined("")} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Retry
              </Button>
              <Button onClick={handleApply} className="gap-2">
                <Check className="h-4 w-4" />
                Apply Improvement
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
