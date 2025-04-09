import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "RevBuddii ",
  description: "Login or Signup",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
