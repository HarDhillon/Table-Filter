import Table from "./components/table";
import { fetchData } from "./lib/actions";

export default async function Home() {

  const data = await fetchData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table data={data}></Table>
    </main>
  );
}
