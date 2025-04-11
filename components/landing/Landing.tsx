import Cta from "@/constant/Cta";
import { Icon } from "@/constant/icons";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { featuresData, steps } from "@/constant/data";
import { Button } from "../ui/button";
import { images } from "@/constant/images";

export default function Landing() {
  return (
    <div className="bg-[#E9F5FF]">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-32 flex mx-auto flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative">
            Empowering{" "}
            <span className="inline-block bg-baseColor text-white p-1 transform -rotate-2 -translate-y-1 relative z-10">
              Trust
            </span>{" "}
            Through Reviews and Transparency
          </h1>

          <p className="mt-6 max-w-4xl text-lg md:text-xl text-gray-600 leading-relaxed">
            Submit authentic reviews that matter, expose fraudulent activities
            with our powerful blacklist tools, and empower a global community to
            make informed decisions.
          </p>

          <div className="flex  md:flex-row items-center gap-4 mt-10">
            <Cta
              children="Get Started"
              className="bg-baseColor hover:bg-opacity-90 text-white font-medium text-sm p-6  rounded-[72px] w-full sm:w-auto  shadow-lg transition-all duration-300"
            />
            <Cta
              children="Discover More"
              className="bg-transparent text-baseColor hover:bg-opacity-90 border p-6 border-baseColor font-medium w-full sm:w-auto  rounded-[72px]  text-base shadow-lg transition-all duration-300"
            />
          </div>
        </div>
      </section>
      <section className="relative w-full flex overflow-hidden items-center justify-center py-24">
        <div className="relative">
          <div className="relative z-10">
            <Image
              src={Icon.hero}
              alt="Hero image"
              width={700}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="absolute z-20 top-0 right-16 md:right-0 transform translate-x-1/2 -translate-y-1/2">
            <Image
              src={Icon.ratingWidget}
              alt="Comment widget"
              width={300}
              height={300}
              className="w-32 md:w-48 lg:w-64 xl:w-72 2xl:w-80"
            />
          </div>

          <div className="absolute z-20 bottom-0 left-16 md:left-0 transform -translate-x-1/2 translate-y-1/2">
            <Image
              src={Icon.commentWidget}
              alt="Comment widget"
              width={300}
              height={300}
              className="w-32 md:w-48 lg:w-64 xl:w-72 2xl:w-80"
            />
          </div>

          <div className="absolute z-2 bottom-0 right-16 md:right-0 transform translate-x-1/2 translate-y-1/2">
            <Image
              src={Icon.colorWidget}
              alt="Comment widget"
              width={300}
              height={300}
              className="w-32 md:w-48 lg:w-64 xl:w-72 2xl:w-80"
            />
          </div>
        </div>
      </section>

      <section className="wrapper my-10">
        <div>
          <h3 className="text-baseColor text-xs font-bold">Features</h3>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            What{" "}
            <span className="inline-block bg-baseColor text-white p-1 transform -rotate-2 -translate-y-1 relative z-10">
              Revbudii
            </span>{" "}
            Can
            <br />
            Do For You
          </h1>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6  md:grid-cols-3">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="p-8 flex flex-col items-center justify-center"
            >
              <CardHeader className="flex items-center ">
                {feature.icon}
                <h3 className="text-lg text-center font-semibold">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export function GettingStarted() {
  return (
    <div className="wrapper px-4 py-10">
      <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-800 mb-2">
        Getting Started is Easy
      </h1>
      <h2 className="text-xl text-center text-[#343A40] font-normal mb-16">
        How It Works
      </h2>

      <div className="relative">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          if (step.imagePosition === "left") {
            return (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  !isLast ? "mb-16" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <Image
                      src={step.image}
                      alt={`${step.title} visualization`}
                      width={450}
                      height={200}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md cursor-pointer">
                      <div className="text-blue-500">▶</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex">
                  <div className="relative flex flex-col items-center mr-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-2xl font-bold z-10">
                      {step.number}
                    </div>
                    {!isLast && (
                      <div className="absolute top-16 w-0.5 h-full bg-blue-200 border-dashed border border-[#78ADFF]"></div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row ${
                  !isLast ? "mb-16" : ""
                }`}
              >
                <div className="flex-1 flex justify-start pr-8">
                  <div className="max-w-md">
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="relative flex flex-col items-center mr-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-2xl font-bold z-10">
                      {step.number}
                    </div>
                    {!isLast && (
                      <div className="absolute top-16 w-0.5 h-full bg-blue-200 border-dashed border border-[#78ADFF]"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="relative rounded-xl overflow-hidden shadow-lg border border-blue-100 ml-6">
                      <Image
                        src={step.image}
                        alt={`${step.title} visualization`}
                        width={450}
                        height={200}
                        className="w-full h-auto"
                      />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md cursor-pointer">
                        <div className="text-blue-500">▶</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="flex flex-col  items-end text-right justify-end rtl:text-right mt-20">
        <h1 className=" max-w-lg text-5xl text-[#343A40] ">
          Trusted by Thousands of Users Worldwide
        </h1>
        <p className="max-w-md text-sm text-[#000000] mt-2">
          Join a growing community committed to transparency and trust in
          reviews.
        </p>
        <Cta
          className="bg-baseColor rounded-[72px] text-sm text-white mt-4"
          children="Join Now"
        />
      </div>
    </div>
  );
}

export function Blacklist() {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Submit a Report",
      description:
        "Easily report suspicious entities by providing verified details. Help protect others from fraud.",
    },
    {
      id: 2,
      number: "2",
      title: "Verification Process",
      description:
        "Our team carefully reviews reports to ensure fairness before blacklisting offenders.",
    },
    {
      id: 3,
      number: "3",
      title: "Browse & Stay Safe",
      description:
        "Access the blacklist, check warnings, and make informed choices before engaging.",
    },
  ];

  return (
    <div className=" bg-[#202123] text-white py-16 ">
      <main className="wrapper">
        <div className="text-start mb-16">
          <h2 className="text-xl md:text-xl font-semibold text-gray-400">
            Blacklist
          </h2>
          <h1 className="mt-2 text-2xl sm:text-3xl max-w-4xl text-[#FAFDFF] md:text-3xl lg:text-5xl font-bold tracking-tight ">
            Report Fraudulent Activities to Help Create a Safer Community
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card
              key={step.id}
              className="bg-[#252628] border-0 p-8 rounded-lg"
            >
              <CardHeader className="text-6xl p-0   font-bold text-gray-500">
                {step.number}
              </CardHeader>
              <CardContent className="p-0 text-[#FAFDFF]">
                <h3 className="text-2xl md:text-xl lg:text-2xl py-4 font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export function TrustedContributors() {
  return (
    <div className=" wrapper w-full">
      <div className=" px-4 py-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Recognizing Trusted Contributors
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Revbuddi thrives on real user contributions, building a trusted
            space for reviews and fraud prevention. Earn badges, stay updated on
            fraud alerts, and make an impact.
          </p>
        </div>

        <div className="mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 text-sm rounded-[72px] ">
            Join Now
          </Button>
        </div>

        <div className="hidden md:block">
            <div className="flex relative flex-col items-center justify-end h-full">
              <Image
                src={images.Leaderboard}
                width={200}
                height={200}
                className="md:w-1/2 w-full object-cover z-20"
                alt="leaderboard"
              />
              <Image
                src={images.Table}
                width={200}
                height={200}
                className="md:w-1/2 z-10 w-full md:-bottom-4 absolute right-0"
                alt="data table"
              />
            </div>
          </div>
      </div>
    </div>
  );
}
