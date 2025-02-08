"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null; // Prevents rendering anything before redirect
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>You are logged in as {session.user?.email}</p>
    </div>
  );
}
