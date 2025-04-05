"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star } from "lucide-react";
import LeadersCard from "./LeadersCard";

const initialData = [
  {
    id: "1",
    name: "John Smith",
    role: "Senior Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    rating: 4,
  },
  {
    id: "2",
    name: "Emma Johnson",
    role: "Product Manager",
    company: "InnovateTech",
    location: "New York, NY",
    rating: 5,
  },
  {
    id: "3",
    name: "Michael Williams",
    role: "UX Designer",
    company: "DesignHub",
    location: "Chicago, IL",
    rating: 3,
  },
  {
    id: "4",
    name: "Sarah Brown",
    role: "Marketing Director",
    company: "GrowthCo",
    location: "Austin, TX",
    rating: 4,
  },
  {
    id: "5",
    name: "David Lee",
    role: "Data Scientist",
    company: "DataDrive",
    location: "Seattle, WA",
    rating: 2,
  },
];

export default function EmployeeTable() {
  const [data, setData] = useState(initialData);

  const handleRatingChange = (id, newRating) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, rating: newRating } : item
      )
    );
  };

  return (
    <div className="w-full ">
      <LeadersCard />
      <Table className="mt-20 bg-white shadow-xl">
        <TableCaption className="sr-only">
          A list of company employees and their ratings.
        </TableCaption>
        <TableHeader>
          <TableRow>
            {["Name", "Role", "Company", "Location", "Rating"].map((header) => (
              <TableHead key={header} className="font-bold bg-[#F5F5F5]">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((person) => (
            <TableRow key={person.id} className="hover:bg-[#E1CFFF]">
              {["name", "role", "company", "location"].map((field, index) => (
                <TableCell
                  key={field}
                  className={`py-4 ${
                    index === 0 ? "font-medium" : ""
                  }`}
                >
                  {person[field]}
                </TableCell>
              ))}
              <TableCell>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={`cursor-pointer ${
                        star <= person.rating
                          ? "fill-[#6926D7] text-[#6926D7]"
                          : "text-[#EEE3FF] fill-[#EEE3FF]"
                      }`}
                      onClick={() => handleRatingChange(person.id, star)}
                    />
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
