"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EnquiryTable({ enquiries: initialEnquiries }) {
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [updatingId, setUpdatingId] = useState(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const updateStatus = async (id, status) => {
    setUpdatingId(id);

    const { error } = await supabase
      .from("Enquiry")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status.");
      setUpdatingId(null);
      return;
    }

    setEnquiries((current) =>
      current.map((enquiry) =>
        enquiry.id === id
          ? { ...enquiry, status }
          : enquiry
      )
    );

    setUpdatingId(null);
  };
  const deleteEnquiry = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this enquiry?"
  );

  if (!confirmed) return;

  const { error } = await supabase
    .from("Enquiry")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting enquiry:", error);
    alert("Failed to delete enquiry.");
    return;
  }

  setEnquiries((current) =>
    current.filter((enquiry) => enquiry.id !== id)
  );
};
  return (
    <>
      <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="border-b border-white/10 bg-neutral-900">
            <tr>
              <th className="px-5 py-4 text-sm text-neutral-400">
                Name
              </th>

              <th className="px-5 py-4 text-sm text-neutral-400">
                Phone
              </th>

              <th className="px-5 py-4 text-sm text-neutral-400">
                Email
              </th>

              <th className="px-5 py-4 text-sm text-neutral-400">
                Goal
              </th>

              <th className="px-5 py-4 text-sm text-neutral-400">
                Status
              </th>

              <th className="px-5 py-4 text-sm text-neutral-400">
                Date
              </th>

              <th className="px-5 py-4 text-sm text-neutral-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {enquiries?.map((enquiry) => (
              <tr
                key={enquiry.id}
                className="border-b border-white/5"
              >
                <td className="px-5 py-4 text-sm text-white">
                  {enquiry.name}
                </td>

                <td className="px-5 py-4 text-sm text-neutral-300">
                  {enquiry.phone}
                </td>

                <td className="px-5 py-4 text-sm text-neutral-300">
                  {enquiry.email || "—"}
                </td>

                <td className="px-5 py-4 text-sm text-neutral-300">
                  {enquiry.goal || "—"}
                </td>

                <td className="px-5 py-4">
                  <select
                    value={enquiry.status}
                    disabled={updatingId === enquiry.id}
                    onChange={(e) =>
                      updateStatus(enquiry.id, e.target.value)
                    }
                    className="rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none focus:border-white/30 disabled:opacity-50"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>

                <td className="px-5 py-4 text-sm text-neutral-400">
                  {new Date(
                    enquiry.created_at
                  ).toLocaleDateString()}
                </td>

                <td className="px-5 py-4">
                    <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedEnquiry(enquiry)}
                    className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:text-gold"
                  >
                    View
                  </button>
                  <button
      onClick={() => deleteEnquiry(enquiry.id)}
      className="rounded-lg border border-red-500/20 px-3 py-2 text-sm text-red-400 transition hover:border-red-500/50 hover:text-red-300"
    >
      Delete
    </button>
                  </div>
                </td>

              </tr>
            ))}

            {(!enquiries || enquiries.length === 0) && (
              <tr>
                <td
                  colSpan="7"
                  className="px-5 py-10 text-center text-neutral-500"
                >
                  No enquiries yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Enquiry Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-neutral-950 p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Enquiry Details
                </h2>

                <p className="mt-1 text-sm text-neutral-400">
                  Submitted by {selectedEnquiry.name}
                </p>
              </div>

              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-xl text-neutral-400 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Name
                </p>
                <p className="mt-1 text-white">
                  {selectedEnquiry.name}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Phone
                </p>
                <p className="mt-1 text-white">
                  {selectedEnquiry.phone}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Email
                </p>
                <p className="mt-1 text-white">
                  {selectedEnquiry.email || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Goal
                </p>
                <p className="mt-1 text-white">
                  {selectedEnquiry.goal || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Message
                </p>

                <div className="mt-2 rounded-lg border border-white/10 bg-black/30 p-4">
                  <p className="whitespace-pre-wrap text-sm leading-6 text-neutral-300">
                    {selectedEnquiry.message || "No message provided."}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedEnquiry(null)}
              className="mt-6 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}