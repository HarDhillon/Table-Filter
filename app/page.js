import MultiSelect from "./components/multiselect";
import Table from "./components/table";
import { fetchData } from "./lib/actions";
import { filters } from "./data/filterData";
import FilterTable from "./components/filter-table";
import { Suspense } from "react";

export default async function Home() {

  const data = await fetchData()

  // Our MultiSelect is built dynamically based on number of filters.
  const renderedMultiSelects = Object.entries(filters).map(([filterKey, filterValues]) => {
    return <MultiSelect key={filterKey} tableColumn={filterKey} filterValues={filterValues}>{filterKey}</MultiSelect>
  })

  return (
    <FilterTable>
      <main className="flex min-h-screen flex-col p-24">
        <div className="flex space-x-8">
          {renderedMultiSelects}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Table data={data}></Table>
        </Suspense>
      </main>
    </FilterTable>
  );
}
