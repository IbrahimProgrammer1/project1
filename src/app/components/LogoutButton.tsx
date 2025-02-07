// src/app/components/LogoutButton.tsx
'use client';

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="bg-red-600 text-white rounded-lg py-3 hover:bg-red-700"
    >
      Logout
    </Button>
  );
}
