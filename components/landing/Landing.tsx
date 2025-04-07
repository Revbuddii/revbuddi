import Cta from "@/constant/Cta";
import { Icon } from "@/constant/icons";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { featuresData, steps } from "@/constant/data";

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

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Cta
              children="Get Started"
              className="bg-baseColor hover:bg-opacity-90 text-white font-medium text-sm p-6  rounded-xl w-full sm:w-auto  shadow-lg transition-all duration-300"
            />
            <Cta
              children="Discover More"
              className="bg-transparent text-baseColor hover:bg-opacity-90 border p-6 border-baseColor font-medium w-full sm:w-auto  rounded-xl  text-base shadow-lg transition-all duration-300"
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

{/* steps */}
   <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-800">Getting Started is Easy</h2>
        <p className="text-xl text-center text-gray-600 mt-2 mb-12">How It Works</p>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {index % 2 === 0 && (
                <div className="md:col-span-5 md:col-start-1">
                  <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-lg bg-white">
                    <div className="aspect-[4/3] relative">
                      <Image 
                        src={step.image}
                        fill
                        alt={step.title}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="md:col-span-2 md:col-start-6 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-200 text-3xl font-semibold text-gray-800 flex items-center justify-center">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-16 border-l-4 border-blue-200 border-dashed mt-2"></div>
                )}
              </div>
              
              {index % 2 === 0 && (
                <div className="md:col-span-5 md:col-start-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-base text-gray-600">{step.description}</p>
                  </div>
                </div>
              )}
              
              {index % 2 === 1 && (
                <div className="md:col-span-5 md:col-start-1">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-base text-gray-600">{step.description}</p>
                  </div>
                </div>
              )}
              
              {index % 2 === 1 && (
                <div className="md:col-span-5 md:col-start-8">
                  <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-lg bg-white">
                    <div className="aspect-[4/3] relative">
                      <Image 
                        src={step.image}
                        fill
                        alt={step.title}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
