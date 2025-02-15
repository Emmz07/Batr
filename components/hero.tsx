import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-y-0 right-0 w-full ">
        <div className="relative h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=1470')",
              opacity: 0.9,
              mixBlendMode: "overlay"
            }}
          />
        </div>
      </div>
      
    <div className="relative bg-cover bg-center bg-blend-overlay">
      <div className="container mx-auto min-h-screen flex items-center justify-center">
        <div className="py-24 md:py-32 lg:py-40 max-w-[640px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Join 10,000+ traders worldwide</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Exchange Goods,
            <br />
            <span className="text-primary text-blue-500">Create Value</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-[480px]">
            Transform your unused items into valuable treasures. Join the future of sustainable trading on Batr.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-12 px-6 text-base" asChild>
              <Link href="/browse" className="inline-flex items-center gap-2">
                Start Trading
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base hover:bg-primary/5"
              asChild
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm text-muted-foreground">Active Items</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-bold">30K+</div>
              <div className="text-sm text-muted-foreground">Successful Trades</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}