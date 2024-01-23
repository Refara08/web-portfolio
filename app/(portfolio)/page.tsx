import { buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center pt-[20vh]">
        <div className="text-center">
          <p className="text-lg">The Portfolio of</p>
          <h1 className="text-6xl font-semibold">Gema Refantero</h1>
          <div className="mt-12 flex flex-col">
            <Link
              href="/experiment"
              className={buttonVariants({
                variant: "link",
                className: "group",
              })}
            >
              go to experiment
              <MoveRight className="text-foreground ml-2 group-hover:ml-4 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
