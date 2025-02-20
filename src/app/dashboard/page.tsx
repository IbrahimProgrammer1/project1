"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    // If not logged in, redirect to login page
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>You are logged in as {session.user?.email}</p>
    </div>
  );
}
