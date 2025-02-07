// src/app/profile/page.tsx
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function Profile() {
  return (
    <ProtectedRoute>
      <div className="p-8">
        <h2 className="text-2xl font-bold">Profile Page</h2>
        <p>Welcome to your profile!</p>
      </div>
    </ProtectedRoute>
  );
}
