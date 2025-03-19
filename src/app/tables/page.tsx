import { Metadata } from "next";
import TableOne from "@/components/complex/Tables/TableOne";
import TableTwo from "@/components/complex/Tables/TableTwo";
import TableThree from "@/components/complex/Tables/TableThree";
import Breadcrumb from "@/components/shared/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "TyrAds Tables",
  description:
    "This is Next.js Tables page for TyrAds Dashboard",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
        <div className="flex flex-col gap-10">
          <TableOne />
          <TableTwo />
          <TableThree />
        </div>
    </DefaultLayout>
  );
};

export default TablesPage;
