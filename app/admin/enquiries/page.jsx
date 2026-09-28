import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import EnquiryTable from "@/components/admin/EnquiryTable";
export default async function EnquiriesPage() {
  const supabase = await createSupabaseServerClient();

  // Check if admin is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Fetch enquiries
  const { data: enquiries, error } = await supabase
    .from("Enquiry")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching enquiries:", error);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">
        Enquiries
      </h1>

      <p className="mt-2 text-neutral-400">
        Manage enquiries submitted by gym visitors.
      </p>
        <EnquiryTable enquiries={enquiries || []}/>
    </div>
  );
}