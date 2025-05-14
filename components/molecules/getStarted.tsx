"use client";
import { EMAIL } from "@/app/constants";
import { Button } from "@/components/ui/button";

const handleEmailClick = () => {
  const subject = "Inquiry for Advance Quest";
  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoLink;
};

const GetStarted = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-y-2 border-gray-200 p-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-medium text-2xl text-center md:text-start">
          Ready to get started?
        </h2>
        <span className="text-center md:text-start">
          We would love to connect with you on your business needs
        </span>
      </div>
      <div>
        <Button
          className="hover:cursor-pointer"
          variant="primary"
          size="lg"
          onClick={() => handleEmailClick()}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
