import { getSubs } from "@/lib/supabase";

async function page() {
  const subscribers = await getSubs();
  return (
    <div>
      <h1>All subscribers</h1>
      <ul>
        {subscribers.map((sub) => (
          <li key={sub.id}>
            {sub.name} - {sub.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
