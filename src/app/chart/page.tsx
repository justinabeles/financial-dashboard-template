import React from "react";
import { Metadata } from "next";
import Chart from "@/components/complex/Charts/page";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "TyrAds Chart",
  description:
    "This is Next.js Chart page for TyrAds Dashboard",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Chart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
