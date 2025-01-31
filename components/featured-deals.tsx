import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

const featuredDeals = [
  {
    id: 1,
    title: "MacBook Pro 2021",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    category: "Electronics",
    condition: "Like New",
    lookingFor: "Gaming Console, Camera Gear",
    location: "New York, USA",
    rating: 4.9,
    reviews: 128
  },
  {
    id: 2,
    title: "Vintage Guitar",
    image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=500",
    category: "Music",
    condition: "Good",
    lookingFor: "Audio Equipment, Vinyl Records",
    location: "London, UK",
    rating: 4.7,
    reviews: 84
  },
  {
    id: 3,
    title: "Professional Photography",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500",
    category: "Services",
    condition: "N/A",
    lookingFor: "Web Design, Graphic Design",
    location: "Toronto, Canada",
    rating: 5.0,
    reviews: 156
  },
  {
    id: 4,
    title: "Handcrafted Furniture",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500",
    category: "Furniture",
    condition: "New",
    lookingFor: "Tools, Raw Materials",
    location: "Sydney, Australia",
    rating: 4.8,
    reviews: 92
  },
];

export default function FeaturedDeals() {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Featured Deals
          </h2>
          <p className="text-muted-foreground">
            Hand-picked trades with exceptional value
          </p>
        </div>
        <Link
          href="/browse"
          className="text-primary hover:text-primary/80 transition-colors font-medium"
        >
          View all deals →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredDeals.map((deal) => (
          <Link key={deal.id} href={`/items/${deal.id}`}>
            <Card className="featured-card h-full">
              <div className="aspect-[4/3] relative">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary/90 hover:bg-primary/90">
                    {deal.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-background/90">
                    {deal.condition}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">{deal.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>{deal.rating}</span>
                  <span>({deal.reviews} reviews)</span>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium mb-1">Looking for:</p>
                  <p className="text-sm text-muted-foreground">
                    {deal.lookingFor}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="px-6 py-4 border-t flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {deal.location}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}