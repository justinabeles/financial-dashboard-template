import { Metadata } from "next";
import Dashboard from "@/components/complex/Dashboard/Dashboard";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "TyrAds Dashboard",
  description: "This is Next.js Home for TyrAds Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}
