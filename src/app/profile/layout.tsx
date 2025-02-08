"use client";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
