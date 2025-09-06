import TopNav from "@/components/TopNav";
import SummaryCards from "@/components/SummaryCards";
import ExportPDF from "@/components/ExportPDF";
import Charts from "@/components/Charts";
import FilterBar from "@/components/FilterBar";
import StatsRow from "@/components/StatsRow";

export default function Home() {
  return (
  <main className="min-h-screen  text-gray-900 dark:text-gray-100 transition-colors duration-300">

  <TopNav />

  <section className="p-6 space-y-6">
    <SummaryCards />
    <FilterBar />
    <StatsRow />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Charts />
    </div>

    <ExportPDF />
  </section>
</main>
  )
}