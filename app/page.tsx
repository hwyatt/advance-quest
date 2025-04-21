import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const VALUES = [
  {
    title: "Core Value 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Core Value 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Core Value 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const PACKAGES = [
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
      <div className="relative w-[calc(100vw - 16px)] min-h-62">
        <Image
          src="/background.jpg"
          fill
          alt="background"
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-light text-center z-20 p-4">
          Momentum begins with a purposeful step
        </h1>
      </div>
      <div className="flex flex-col gap-8 md:gap-16 min-h-screen py-8 px-4 md:px-8 m-auto md:max-w-[1280px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-2xl text-center">Who We Are</h2>
          <div className="flex flex-col gap-2 md:grid grid-cols-12">
            {VALUES.map((value: any) => (
              <div
                className="bg-[#c12230] h-[265px] col-span-4 text-primary-foreground flex flex-col justify-end gap-4 p-8 rounded-xl relative overflow-hidden"
                key={value.title}
              >
                <div className="z-10 relative flex flex-col justify-end gap-4">
                  <span className="font-medium">{value.title}</span>
                  <span>{value.desc}</span>
                </div>
                <Image
                  src="/circle.png"
                  alt="circle"
                  width={250}
                  height={250}
                  className="absolute bottom-44 right-[-48]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-2xl text-center">Our Packages</h2>
          <div className="flex flex-col gap-2 md:grid grid-cols-12">
            {PACKAGES.map((PACKAGE: any) => (
              <Card className="col-span-4" key={PACKAGE.name}>
                <CardHeader>
                  <CardTitle>{PACKAGE.name}</CardTitle>
                  <CardDescription>{PACKAGE.goal}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-1 list-disc list-inside">
                    {PACKAGE.includes.map((item: any) => (
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
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-y p-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-medium text-2xl text-center md:text-start">
              Ready to get started?
            </h2>
            <span className="text-center md:text-start">
              We would love to connect with you on your business needs
            </span>
          </div>
          <div>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
