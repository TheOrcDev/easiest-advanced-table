import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed521",
      amount: 200,
      status: "success",
      email: "a@example.com",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "728ed523",
      amount: 10,
      status: "failed",
      email: "c@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
