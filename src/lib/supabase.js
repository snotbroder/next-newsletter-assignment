const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: key,
  prefer: "return=representation",
};

export async function getSubs() {
  const response = await fetch("https://yvryewmqhortlntohllc.supabase.co/rest/v1/subscriptions", {
    // method: "GET",
    headers: headersList,
  });

  const data = await response.json();
  return data;
}

// export async function getSubById(id) {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: headersList,
//   });

//   const data = await response.json();
//   return data;
// }

// export async function postSub(subdata) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: headersList,
//     body: JSON.stringify(subdata),
//   });

//   const data = await response.json();
//   return data;
// }

// export async function deleteSub(id) {
//   const response = await fetch(url, {
//     method: "DELETE",
//     headers: headersList,
//     body: JSON.stringify(id),
//   });

//   const data = await response.json();
//   return data;
// }
