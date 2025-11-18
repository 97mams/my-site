import { Card } from "@/components/ui/card";
import { getData } from "@/serve/data";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SideFunProject } from "./SideFunProject";
import { Work } from "./Works";

export const Status = () => {
  const data = getData();
  return (
    <Section className="flex max-md:flex-col gap-2 items-start">
      <div className="flex-[3] w-full">
        <Card className="p-4 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <SideFunProject data={data} />
        </Card>
      </div>
      <div className="flex-[2] flex flex-col w-full gap-2">
        <Card className="flex-1 p-4 ">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                Image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
              />
            ))}
          </div>
        </Card>
        <Card className="flex flex-col flex-1 p-4 w-full gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            image="/moi.png"
            mediumImage="/github-logo.png"
            name="97mams"
            description="github"
            url="https://github.com/97mams"
          />
          <ContactCard
            image="/moi.png"
            mediumImage="/google-mail.png"
            name="anjaniainamamisoa"
            description="google email"
            url="mailto:anjaniainamamisoa@gmail.com"
          />
        </Card>
      </div>
    </Section>
  );
};

const WORKS = [
  {
    image: "/Logo-paositra.jpg",
    title: "Paositra Mg",
    role: "developer intern",
    date: "Sep-Déc 2023",
  },
  {
    image: "/logo.png",
    title: "R@ndevTeam",
    role: "developer intern",
    date: "Sep-Déc 2022",
  },
];
