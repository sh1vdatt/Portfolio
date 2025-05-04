"use client";
import Link from "next/link";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

interface routeProps {
  label: string;
  url: string;
}

const routes: routeProps[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

export const NavbarSection = () => {
  const pathname = usePathname();

  return (
    <Navbar
      classNames={{
        wrapper: [
          "bg-lime-100",
          "shadow-sm",
          "rounded-xl",
          "h-11",
          "my-8",
          "flex",
          "justify-center",
          "w-auto",
          "px-2",
        ],

        item: [
          "transition-all",
          "flex",
          "relative",
          "text-sm",
          "text-gray-500",
          "font-medium",
          "items-center",
          "hover:text-teal-500",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-teal-500",
          "data-[active=true]:text-gray-800",
          "data-[active=true]:bg-stone-50 rounded-lg",
        ],
      }}
      isBlurred
    >
      <NavbarContent className="sm:flex gap-4" justify="center">
        {routes.map((section: routeProps) => (
          <NavbarItem key={section.url} isActive={pathname === section.url}>
            <Link
              className="px-3 py-1.5 rounded-lg text-gray-500 hover:text-teal-500 active:text-gray-800"
              href={section.url}
            >
              {section.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
