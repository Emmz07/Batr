import { Card, CardContent } from "@/components/ui/card";
import { Upload, Search, HandshakeIcon, Star } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "List Your Items",
    description: "Post items or services you want to trade with clear photos and descriptions.",
  },
  {
    icon: Search,
    title: "Find Matches",
    description: "Browse through available items and find potential trading partners.",
  },
  {
    icon: HandshakeIcon,
    title: "Make a Deal",
    description: "Negotiate terms and agree on a fair trade with your trading partner.",
  },
  {
    icon: Star,
    title: "Complete Trade",
    description: "Meet safely, exchange items, and leave feedback for your trading experience.",
  },
];

export default function HowItWorks() {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
        How Batr Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}