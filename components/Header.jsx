import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { getSession } from "@auth0/nextjs-auth0";

const Header = async () => {
  const session = await getSession();

  if (!session || !session.user) {
    return (
      <header className="flex justify-between px-8 border-b mb-5">
        <nav className="py-1 px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/image.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </Link>
          <Button asChild variant="default">
            <Link href="/api/auth/login">Login</Link>
          </Button>
        </nav>
      </header>
    );
  }

  const { user } = session;

  return (
    <header className="container mx-auto">
      <nav className="py-1 px-2 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/image.png" alt="Logo" width={150} height={150} />
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white">
              <PenBox size={18} />
              Create Project
            </Button>
          </Link>
          <img
            src={user.picture}
            alt={user.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <Button asChild variant="destructive">
            <Link href="/api/auth/logout">Logout</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
