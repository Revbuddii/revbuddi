
"use client"

import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Icon } from "@/constant/icons";
export default function SmartphoneTable() {
  const smartphones = [
    {
      id: 1,
      rank: 1,
      change: "up",
      name: "Galaxy S25 Ultra",
      brand: "Samsung",
      image: Icon.andriodNew,
      rating: 4.9,
      reviews: 1024912,
      trustScore: 95573
    },
    {
      id: 2,
      rank: 2,
      change: "down",
      name: "Pixel 9 Pro",
      brand: "Google Pixel",
      image: Icon.andriodNew,
      rating: 4.8,
      reviews: 961303,
      trustScore: 91349
    },
    {
      id: 3,
      rank: 3,
      change: "none",
      name: "iPhone 16 pro",
      brand: "Apple",
      image: Icon.andriodNew,
      rating: 4.5,
      reviews: 1001471,
      trustScore: 73092
    },
    {
      id: 4,
      rank: 4,
      change: "up",
      name: "Galaxy Z Fold 6",
      brand: "Samsung",
      image: Icon.andriodNew,
      rating: 4.5,
      reviews: 1000820,
      trustScore: 73092
    },
    {
      id: 5,
      rank: 5,
      change: "down",
      name: "Galaxy Z Flip 6",
      brand: "Samsung",
      image: Icon.andriodNew,
      rating: 4.5,
      reviews: 998800,
      trustScore: 73092
    },
    {
      id: 6,
      rank: 6,
      change: "none",
      name: "Nothing Phone 3",
      brand: "Nothing",
      image: Icon.andriodNew,
      rating: 4.5,
      reviews: 998800,
      trustScore: 73092
    },
    {
      id: 7,
      rank: 6,
      change: "up",
      name: "Rog Phone 9",
      brand: "Asus",
      image: Icon.andriodNew,
      rating: 4.5,
      reviews: 998800,
      trustScore: 73092
    }
  ];
// @ts-ignore
  const getChangeIcon = (change) => {
    switch(change) {
      case "up": 
        return <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full text-xs">▲</span>;
      case "down": 
        return <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full text-xs">▼</span>;
      default: 
        return <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-600 rounded-full text-xs">−</span>;
    }
  };
// @ts-ignore
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="w-full shadow-sm wrapper mt-6">
      <Table>
        <TableHeader >
          <TableRow >
            <TableHead className='font-bold text-black'>#</TableHead>
            <TableHead className='font-bold text-black'>Smartphone</TableHead>
            <TableHead className='font-bold text-black'>Rating</TableHead>
            <TableHead className='font-bold text-black'>Reviews</TableHead>
            <TableHead className='font-bold text-black'>Trust Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {smartphones.map((phone, index) => (
            <TableRow key={phone.id} className={index % 2 !== 0 ? 'bg-gray-50' : ''}>
              <TableCell className="font-medium flex items-center gap-1">
                <span>{phone.rank}</span>
                {getChangeIcon(phone.change)}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 overflow-hidden rounded-md">
                    <Image 
                      src={phone.image} 
                      alt={phone.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{phone.name}</h3>
                    <p className="text-sm text-gray-600">{phone.brand}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="inline-flex text-xs items-center px-2 py-1  rounded-md bg-blue-600 text-white">
                  <span className="mr-1  text-[#FFC857]">★</span> {phone.rating}
                </div>
              </TableCell>
              <TableCell>{formatNumber(phone.reviews)}</TableCell>
              <TableCell>{formatNumber(phone.trustScore)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}