const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  //   Accept: "application/json",
  "Content-Type": "application/json",
  apikey: key,
  Prefer: "return=representation",
};

export async function getSubs() {
  const response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}
