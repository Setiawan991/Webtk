"use client";
import { ClerkProvider, UserButton, useUser } from "@clerk/nextjs";
import {
  AddressBookTabs,
  Calendar,
  CaretDoubleLeft,
  CaretDoubleRight,
  Person,
  Plus,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const NavbarButton = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <p>loading...</p>;

  return isSignedIn ? (
    <>
      <Link href={"/dashboard"}>home</Link>

      <UserButton afterSignOutUrl="/dashboard" />
    </>
  ) : (
    <div className="w-full flex justify-end">
      <Link href={"dashboard/sign-in"}>login</Link>
    </div>
  );
};

export default NavbarButton;
