import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Secure Trading",
    description: "Verified users and secure messaging system to ensure safe trades.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join thousands of traders exchanging items and services daily.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "User ratings and reviews help maintain high trading standards.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our support team is always here to help with any issues.",
  },
];

export default function TrustSection() {
  return (
    <section className="container bg-muted/50 rounded-lg py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Trade with Confidence
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          SwapSpot provides a secure and reliable platform for all your bartering needs.
          Join our trusted community of traders today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustFeatures.map((feature, index) => (
          <Card key={index} className="bg-background">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}