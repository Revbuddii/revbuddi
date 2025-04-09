"use client";
import Image from "next/image";
import { Icon } from "@/constant/icons";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
// @ts-expect-error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
// @ts-expect-error
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 bg-grid-sky-100/50">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl p-4">
        <CardHeader className="flex flex-col items-center space-y-2 pt-6 pb-4">
          <div className="w-12 h-12">
          <Image
            src={Icon.logo}
            alt="logo"
            width={24}
            height={24}
            className="w-full h-full object-cover"
          />
          </div>
          <h1 className="text-xl font-medium text-gray-800">Welcome To RevBuddii</h1>
          <p className="text-sm text-gray-500">Please log in to continue</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl text-base border-gray-200"
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="rounded-xl text-base border-gray-200"
              />
              <div className="flex justify-end mt-1">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-baseColor  hover:bg-blue-700 text-white rounded-2xl p-6"
            >
              Log In
            </Button>

            <div className="relative flex items-center justify-center mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative px-4 bg-white text-sm text-gray-500">
                Or Login with
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Button 
                variant="outline" 
                className="w-full border border-gray-200 bg-white text-gray-800 flex items-center justify-center gap-2 py-2 rounded-md"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g transform="matrix(1, 0, 0, 1, 0, 0)">
                    <path d="M21.35,11.1H12v3.2h5.59c-0.5,2.8-2.91,4.5-5.59,4.5c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.4,0,2.79,0.5,3.89,1.4 l2.29-2.29C16.56,4.39,14.34,3.5,12,3.5c-4.97,0-9,4.03-9,9s4.03,9,9,9s8.5-3.53,8.5-8.5C20.5,12.22,20.35,11.56,21.35,11.1z" fill="#4285F4"></path>
                    <path d="M12,21.5c2.34,0,4.56-0.89,6.18-2.41l-2.29-2.29C14.79,17.5,13.4,18,12,18c-2.68,0-5.09-1.7-5.59-4.5H3.12 C3.62,17.79,7.5,21.5,12,21.5z" fill="#34A853"></path>
                    <path d="M6.41,13.5H3.12c-0.29,0.88-0.5,1.84-0.5,2.88c0,1.04,0.18,2.01,0.5,2.91L6.41,13.5z" fill="#FBBC05"></path>
                    <path d="M12,6c1.4,0,2.79,0.5,3.89,1.4l2.29-2.29C16.56,3.49,14.34,2.6,12,2.6c-4.48,0-8.36,3.71-9.38,8.08h3.29 C6.41,7.8,8.82,6,12,6z" fill="#EA4335"></path>
                  </g>
                </svg>
                Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full border border-gray-200 bg-white text-gray-800 flex items-center justify-center gap-2 py-2 rounded-md"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="black"></path>
                </svg>
                Apple
              </Button>
            </div>
            
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/auth/create" className="text-blue-600 hover:underline font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}