'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Repeat, 
  Bell, 
  MessageSquare, 
  Menu,
  X,
  UserCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary navigation */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Repeat className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">Batr</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ml-10 space-x-8">
              <Link href="/trades" className="text-foreground/80 hover:text-primary transition-colors">
                Browse Trades
              </Link>
              <Link href="/categories" className="text-foreground/80 hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
                How It Works
              </Link>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search items to trade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Right side navigation items */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-destructive rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="default">
              Start Trading
            </Button>
            <Button variant="ghost" size="icon">
              <UserCircle2 className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Search - Mobile */}
            <div className="p-2">
              <Input
                type="text"
                placeholder="Search items to trade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            <Link
              href="/trades"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary"
            >
              Browse Trades
            </Link>
            <Link
              href="/categories"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary"
            >
              Categories
            </Link>
            <Link
              href="/how-it-works"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary"
            >
              How It Works
            </Link>
            
            <div className="pt-4 pb-3 border-t border-border">
              <div className="flex items-center px-3">
                <Button variant="default" className="w-full">
                  Start Trading
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}