async function page({ params }) {
  const { id } = await params;
  const subscriber = await getSubById(id);
  async function updateAction(params) {}

  /*TODO:
    - Hent subscriber med id fra params
    - Lav en formular med input for name og email med "defaultValue" sat til subscriberens nuværende værdier
    - Lav en funktion med "use server" som køres fra en action på formen
    - Funktionen modtager automatisk "formData" som argument
    - Opret et objekt med name og email fra formData; fx 'email: formData.get("email")'
    importer din PATCH-funktion fra supabase og kør den med objektet som argument
    - Brug revalidatePath("/") til at genindlæse siden, hvor du viser alle subscribers
    - Brug redirect("/") til at sende brugeren tilbage til forsiden
    */

  return <form></form>;
}

export default page;
