import GetStarted from "@/components/molecules/getStarted";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CoreValue = {
  title: string;
  desc: string;
};

type Package = {
  name: string;
  idealFor: string;
  goal: string;
  includes: string[];
  idealClients: string;
};

const VALUES: CoreValue[] = [
  {
    title: "Innovation",
    desc: "We embrace creative problem-solving, always seeking new and better ways to enhance organizational flow and increase impact.",
  },
  {
    title: "Efficiency",
    desc: "We prioritize time, resources, and effort optimization, helping clients accomplish more with less.",
  },
  {
    title: "Clarity",
    desc: "We provide clear, actionable insights and solutions, ensuring every decision is based on a broad, strategic view of the future.",
  },
  {
    title: "Sustainability",
    desc: "We build systems and structures that are not only effective today but can grow and adapt with the needs of tomorrow.",
  },
  {
    title: "Collaboration",
    desc: "We work closely with our clients, understanding their unique needs and challenges to create tailored, effective solutions.",
  },
  {
    title: "Impact",
    desc: "We focus on delivering measurable improvements that result in tangible, lasting value.",
  },
  {
    title: "Integrity",
    desc: "We operate with transparency, honesty, and a commitment to doing what’s best for our clients and their long-term success.",
  },
];

const PACKAGES: Package[] = [
  {
    name: "Vision & Strategy",
    idealFor: "Early-stage planning or discovery phase",
    goal: "Help clients envision the future state of their business space with clear goals and strategic direction.",
    includes: [
      "On-site or virtual consultation",
      "Needs assessment and future-state ideation",
      "Space usage analysis and efficiency review",
      "High-level concept drawings or mood boards",
      "Timeline and budget rough draft",
      "Recommendation roadmap (technology upgrades, layout ideas, etc.)",
    ],
    idealClients:
      "clients who are considering a remodel but need clarity on scope, direction, and feasibility.",
  },
  {
    name: "Design & Drafting",
    idealFor: "Clients ready to see their future space come to life on paper",
    goal: "Deliver functional, aesthetically-pleasing, and efficiency-focused plans tailored to your business.",
    includes: [
      "Full drafting services (floor plans, 3D renderings if applicable)",
      "Space optimization analysis",
      "Compliance and regulation checks",
      "Suggested materials and finishes",
      "Revision cycles included",
    ],
    idealClients:
      "clients who already know they want to remodel and need a clear, professional design to move forward.",
  },
  {
    name: "End-to-End Project Management",
    idealFor: "All-in-one execution support",
    goal: "Take the client from idea to reality—managing the process so they don’t have to.",
    includes: [
      "Everything in the Vision & Strategy + Design & Drafting Packages",
      "Vendor coordination and scheduling",
      "Budget tracking and timeline management",
      "Progress reporting and communication",
      "Final walkthrough and project closeout documentation",
    ],
    idealClients:
      "busy business owners or organizations who want a turnkey solution with a single point of accountability.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 min-h-screen">
      <div className="flex flex-col gap-8 md:gap-16 min-h-screen py-8 px-4 md:px-8 m-auto md:max-w-[1280px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-2xl text-center">Who We Are</h2>
          <div className="flex justify-center">
            <p className="text-center lg:max-w-1/2 lg:text-lg">
              At Advance Quest, we provide visionary solutions that transform
              organizations and spaces into highly effective, future-ready
              environments. With an eagle-eye perspective, we craft tailored
              strategies that increase efficiency, streamline processes, and
              optimize resource use. Our goal is to create sustainable systems
              that drive growth, empower teams, and maximize performance. We
              don’t just help businesses adapt—we help them thrive in an
              ever-evolving world.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-2xl text-center">Core Values</h2>
          <ol className="flex flex-col gap-4">
            {VALUES.map((value: CoreValue, index: number) => (
              <div className="flex items-start gap-2" key={value.title}>
                <span className="text-sm font-medium flex items-center justify-center bg-[#c12230] p-2 rounded-full text-white min-h-8 h-8 min-w-8">
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">{value.title}</span>
                  <span className="text-sm">{value.desc}</span>
                </div>
              </div>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-2xl text-center">Our Packages</h2>
          <div className="flex flex-col gap-2 md:grid grid-cols-12">
            {PACKAGES.map((PACKAGE: Package) => (
              <Card className="col-span-4" key={PACKAGE.name}>
                <CardHeader>
                  <CardTitle>{PACKAGE.name}</CardTitle>
                  <CardDescription>{PACKAGE.goal}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-1 list-disc list-inside">
                    {PACKAGE.includes.map((item: string) => (
                      <li className="font-medium text-sm" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <p className="text-muted-foreground text-sm">
                    Ideal for {PACKAGE.idealClients}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <GetStarted />
      </div>
    </div>
  );
}
