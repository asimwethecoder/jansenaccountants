"use client";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import ModeToggle from "./mode-toggle";

// Main Navigation Bar
export const NavBar: React.FC = () => {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        
        {/* Mobile Menu */}
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Jansen Accountants</SheetTitle>
              <SheetDescription>
                Offering expert accounting and financial consulting services to help your business thrive.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              {/* Menu Links */}
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">Home</Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/services">
                  <Button variant="outline" className="w-full">Services</Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/about">
                  <Button variant="outline" className="w-full">About Us</Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/blog">
                  <Button variant="outline" className="w-full">Blog</Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Contact Us</Button>
                </Link>
              </DialogClose>
              <ModeToggle />
            </div>
          </SheetContent>
        </Dialog>

        {/* Desktop Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden">
            <Link href="/" className="pl-2">
              <h1 className="font-bold">Jansen Accountants</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Links & Mode Toggle */}
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="/services">
            <Button variant="ghost">Services</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About Us</Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact Us</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

// List Item Component with TypeScript Support
interface ListItemProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...rest }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...rest}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
