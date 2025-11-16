import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FacebookIcon } from "./icons/FacebookIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 pt-4">
      <Section className="flex items-baseline">
        <Link href="#" className="text-4xl font-bold tex-primary">
          97mams
        </Link>
        <div className="flex-1" />
        <ul className="flex gap-4">
          <Link
            href={"https://github.com/97mams"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 rounded"
            )}
          >
            <GithubIcon size={20} className="text-foregroud" />
          </Link>
          <Link
            href={"#"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 rounded"
            )}
          >
            <FacebookIcon size={20} className="text-foregroud" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
