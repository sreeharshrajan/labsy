import { ChartAreaInteractive } from "@/components/modules/dashboard/chart-area-interactive";
import { DataTable } from "@/components/modules/dashboard/data-table";
import data from "@/components/modules/dashboard/data.json";
import { SectionCards } from "@/components/modules/dashboard/section-cards";

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <SectionCards />
      <ChartAreaInteractive />
      <DataTable data={data} />
    </div>
  );
}
