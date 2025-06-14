"use client"
import { submitAction } from "./actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  return (
    <form
      ref={ref}
      action={async (formData) => {
        await submitAction(formData);  // formData is passed directly
        ref.current?.reset();          // reset form after successful submission
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="add">Address</label>
        <input type="text" name="add" id="add" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
