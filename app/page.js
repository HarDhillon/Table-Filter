import MultiSelect from "./components/multiselect";
import Table from "./components/table";
import { fetchData } from "./lib/actions";
import { filters } from "./data/filterData";
import FilterTable from "./components/filter-table";
import { Suspense } from "react";
import Search from "./components/search";

export default async function Home() {

  const data = await fetchData()

  // Our MultiSelect is built dynamically based on number of filters.
  const renderedMultiSelects = Object.entries(filters).map(([filterKey, filterValues]) => {
    return <MultiSelect key={filterKey} tableColumn={filterKey} filterValues={filterValues}>{filterKey}</MultiSelect>
  })

  return (
    <main className="flex min-h-screen flex-col p-24 bg-[#F8F9FA]">

      <h1 className="mb-10 text-3xl font-semibold text-[#003057]">Product Finder</h1>
      <FilterTable>
        <div className="mb-12 w-fit min-w-[50%]">
          <Search></Search>
          <div className="flex space-x-8 w-fit">
            {renderedMultiSelects}
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Table data={data}></Table>
        </Suspense>
      </FilterTable>
    </main>

  );
}
