import React, { useState } from "react";
import FormSekolah from "./FormSekolah";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
      <div class="py-12 mx-3">
        <h2 class="text-2xl font-bold text-primary text-center sm:text-left">
          Formulir Pendaftaran Chronicles
        </h2>
        <p class="my-2 text-lg text-gray-600 text-center sm:text-left">Unravel Your Legacy</p>
        {!isSubmitted ? (
          <FormSekolah submitForm={submitForm} />
        ) : (
          <h1 class="h-screen">Form telah terkirim</h1>
        )}
      </div>
    </div>
  );
}

export default Form;
