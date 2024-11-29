import Newsletter from "@/components/Newsletter";

import { getSubs } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export default async function Home() {
  async function deleteSub(id) {
    await deleteSub(id);
    revalidatePath("/");
  }
  const subscribers = await getSubs();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">Newsletter</h1>
        <Newsletter />
        <ul>
          {subscribers.map((sub) => (
            <li className="m-1 bg-gray-200 rounded-sm p-2" key={sub.id}>
              {sub.name} - {sub.email}
              <form action={deleteSub.bind(null, sub.id)}>
                <button className="p-1 bg-red-200 ml-2 rounded-sm">Delete</button>
              </form>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
