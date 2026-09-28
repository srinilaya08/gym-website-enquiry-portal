"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-neutral-800 bg-neutral-900 md:block">
          <div className="border-b border-neutral-800 p-6">
            <h1 className="text-xl font-bold">
              HAPPY WELLNESS
            </h1>

            <p className="mt-1 text-xs text-neutral-500">
              Admin Panel
            </p>
          </div>

          <nav className="p-4">
            <Link
              href="/admin/dashboard"
              className="block rounded-lg px-4 py-3 text-sm text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/enquiries"
              className="mt-1 block rounded-lg px-4 py-3 text-sm text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
            >
              Enquiries
            </Link>
          </nav>
        </aside>

        {/* Main area */}
        <div className="flex min-w-0 flex-1 flex-col">

          {/* Top bar */}
          <header className="flex h-16 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4 md:px-8">
            <div>
              <p className="text-sm text-neutral-400">
                Admin Panel
              </p>
            </div>
            <Link
  href="/"
  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
>
  ← Home
</Link>
            <button
              onClick={handleLogout}
              className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
            >
              Logout
            </button>
          </header>

          {/* Page content */}
          <main className="flex-1 p-4 md:p-8">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
}