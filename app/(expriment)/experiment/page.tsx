import { buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const LINKS = [
  {
    title: "Paralax scroll (unfinished)",
    slug: "paralax-scroll",
  },
  {
    title: "Zoom Paralax",
    slug: "zoom-paralax",
  },
  {
    title: "Cool Hamburger Menu",
    slug: "cool-hamburger-menu",
  },
];

const ExperimentPage = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center pt-[20vh]">
        <div className="text-center">
          <p className="text-lg">The</p>
          <h1 className="text-6xl font-semibold">Experiments</h1>
          <div className="mt-12 flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.slug}
                href={`/experiment/${l.slug}`}
                className={buttonVariants({
                  variant: "link",
                  className: "group",
                })}
              >
                go to {l.title}
                <MoveRight className="text-foreground ml-2 group-hover:ml-4 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperimentPage;
