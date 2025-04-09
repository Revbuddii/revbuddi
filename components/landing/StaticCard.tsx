import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function StatisticsSection() {
  const stats = [
    {
      number: "129k",
      title: "Total reviews submitted.",
      description: "Keep track of the total number of reviews contributed by users, helping to build a transparent and trustworthy platform.",
      learnMoreLink: "#reviews"
    },
    {
      number: "768+",
      title: "Number of blacklisted entities.",
      description: "Monitor the total count of businesses and individuals flagged for fraudulent activities, ensuring safer interactions for everyone.",
      learnMoreLink: "#blacklisted"
    },
    {
      number: "24k",
      title: "Number of verified users.",
      description: "See the growing number of verified users who contribute authentic reviews, strengthening the credibility of the platform.",
      learnMoreLink: "#verified-users"
    }
  ];

  return (
    <div className="py-12">
      <div className="wrapper px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-baseColor">{stat.number}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold text-[#343A40] mb-2">{stat.title}</h3>
                <CardDescription className="text-[#343A40]">
                  {stat.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link 
                  href={stat.learnMoreLink} 
                  className="text-[#343A40] text-xs font-bold underline"
                >
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}