import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Laptop, 
  Sofa, 
  Car, 
  Shirt, 
  Book, 
  Wrench, 
  Palette, 
  Music 
} from "lucide-react";

const categories = [
  { 
    name: "Electronics",
    icon: Laptop,
    href: "/browse/electronics",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  { 
    name: "Furniture",
    icon: Sofa,
    href: "/browse/furniture",
    gradient: "from-amber-500/20 to-red-500/20"
  },
  { 
    name: "Vehicles",
    icon: Car,
    href: "/browse/vehicles",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  { 
    name: "Clothing",
    icon: Shirt,
    href: "/browse/clothing",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  { 
    name: "Books",
    icon: Book,
    href: "/browse/books",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  { 
    name: "Services",
    icon: Wrench,
    href: "/browse/services",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  { 
    name: "Art",
    icon: Palette,
    href: "/browse/art",
    gradient: "from-fuchsia-500/20 to-pink-500/20"
  },
  { 
    name: "Music",
    icon: Music,
    href: "/browse/music",
    gradient: "from-indigo-500/20 to-violet-500/20"
  },
];

export default function Categories() {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Discover Categories
        </h2>
        <p className="text-muted-foreground max-w-[600px]">
          Browse through our diverse range of categories and find exactly what you're looking for
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className={`category-card h-full bg-gradient-to-br ${category.gradient} border-none`}>
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-background/80 backdrop-blur-sm">
                  <category.icon className="h-8 w-8" />
                </div>
                <span className="font-medium text-lg">{category.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}