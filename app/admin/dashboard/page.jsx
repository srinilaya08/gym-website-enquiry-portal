import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabaseServer";

export default async function AdminDashboard() {
  const supabase = await createSupabaseServerClient();

  // Check if admin is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Get all enquiries
  const { data: enquiries, error } = await supabase
    .from("Enquiry")
    .select("*")
    .order("created_at", {ascending: false})

  if (error) {
    console.error("Error fetching enquiries:", error);
  }

  const totalEnquiries = enquiries?.length || 0;

  const newEnquiries =
    enquiries?.filter((enquiry) => enquiry.status === "new").length || 0;

  const contactedEnquiries =
    enquiries?.filter((enquiry) => enquiry.status === "contacted").length || 0;

  const closedEnquiries =
    enquiries?.filter((enquiry) => enquiry.status === "closed").length || 0;

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-neutral-400">
          Welcome back, {user.email}
        </p>
      </div>

      {/* Statistics */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total */}
        <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
          <p className="text-sm text-neutral-400">
            Total Enquiries
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {totalEnquiries}
          </p>
        </div>

        {/* New */}
        <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
          <p className="text-sm text-neutral-400">
            New
          </p>

          <p className="mt-3 text-3xl font-bold text-yellow-400">
            {newEnquiries}
          </p>
        </div>

        {/* Contacted */}
        <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
          <p className="text-sm text-neutral-400">
            Contacted
          </p>

          <p className="mt-3 text-3xl font-bold text-blue-400">
            {contactedEnquiries}
          </p>
        </div>

        {/* Closed */}
        <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
          <p className="text-sm text-neutral-400">
            Closed
          </p>

          <p className="mt-3 text-3xl font-bold text-green-400">
            {closedEnquiries}
          </p>
        </div>
      </div>
      {/* Recent Enquiries */}
<div className="mt-10">
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-xl font-semibold text-white">
        Recent Enquiries
      </h2>

      <p className="mt-1 text-sm text-neutral-500">
        Latest enquiries submitted by visitors.
      </p>
    </div>

    <a
      href="/admin/enquiries"
      className="text-sm font-medium text-gold transition hover:text-white"
    >
      View All →
    </a>
  </div>

  <div className="mt-5 overflow-x-auto rounded-xl border border-white/10">
    <table className="w-full min-w-[700px] text-left">
      <thead className="border-b border-white/10 bg-neutral-900">
        <tr>
          <th className="px-5 py-4 text-xs font-medium text-neutral-500">
            Name
          </th>

          <th className="px-5 py-4 text-xs font-medium text-neutral-500">
            Phone
          </th>

          <th className="px-5 py-4 text-xs font-medium text-neutral-500">
            Goal
          </th>

          <th className="px-5 py-4 text-xs font-medium text-neutral-500">
            Status
          </th>

          <th className="px-5 py-4 text-xs font-medium text-neutral-500">
            Date
          </th>
        </tr>
      </thead>

      <tbody>
        {enquiries?.slice(0, 5).map((enquiry) => (
          <tr
            key={enquiry.id}
            className="border-b border-white/5 last:border-0"
          >
            <td className="px-5 py-4 text-sm font-medium text-white">
              {enquiry.name}
            </td>

            <td className="px-5 py-4 text-sm text-neutral-400">
              {enquiry.phone}
            </td>

            <td className="px-5 py-4 text-sm text-neutral-400">
              {enquiry.goal || "—"}
            </td>

            <td className="px-5 py-4">
              <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                {enquiry.status}
              </span>
            </td>

            <td className="px-5 py-4 text-sm text-neutral-500">
              {new Date(enquiry.created_at).toLocaleDateString()}
            </td>
          </tr>
        ))}

        {(!enquiries || enquiries.length === 0) && (
          <tr>
            <td
              colSpan="5"
              className="px-5 py-10 text-center text-sm text-neutral-500"
            >
              No enquiries yet.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
    </div>
  );
}