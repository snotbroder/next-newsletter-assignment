"use client";
import sendData from "@/app/actions";
import SubmitButton from "@/components/SubmitButton.jsx";
import { useActionState } from "react-dom";

async function Newsletter() {
  const [state, formAction] = useActionState(sendData);

  return (
    <form action={formAction} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded" />
      </div>
      <SubmitButton></SubmitButton>
    </form>
  );
}

export default Newsletter;
