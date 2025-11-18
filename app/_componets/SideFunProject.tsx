"use client";

import { Code } from "lucide-react";
import Link from "next/link";
import { use } from "react";

export const SideFunProject = (data: { data: Promise<any> }) => {
  const res = use(data.data);
  return (
    <div className="w-full flex flex-col gap-2">
      {res.map((project: any, index: number) => (
        <Link
          key={index}
          href={project.html_url}
          className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
          target="_blank"
        >
          <span className="bg-accent text-accent-foreground p-4 rounded">
            <Code size={16} />
          </span>
          <div className="w-full">
            <p className="text-lg font-semibold">{project.name}</p>
            <p className="text-sm font-muted-foregroud">
              {project.description}
            </p>{" "}
          </div>
        </Link>
      ))}
    </div>
  );
};
