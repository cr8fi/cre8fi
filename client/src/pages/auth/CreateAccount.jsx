"use client";

import { useState } from "react";
import "../../assets/form.css";
import useMultistepsForm from "./hooks/useMultistepsForm";
import CreateAccountForm1 from "./UI/CreateAccountForm1";
import CreateAccountForm2 from "./UI/CreateAccountForm2";
import CreateAccountForm3 from "./UI/CreateAccountForm3";
import HeaderTwo from "./Components/HeaderTwo";
import { Check } from "lucide-react";
export default function CreateAccount() {
  const [submitted, setSubmitted] = useState(false);
  const { step, next, isLastStep } = useMultistepsForm([
    <CreateAccountForm1 handleNext={() => next()} />,
    <CreateAccountForm2 handleNext={() => next()} />,
    <CreateAccountForm3
      handleNext={() => next()}
      valid={() => setSubmitted(!submitted)}
    />,
  ]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('../../assets/bg.png')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 mx-4 border-2 gradient-border bg-gradient-to-tr from-[#343E63] to-[#121318] shadow-xl">
        {isLastStep && submitted ? (
          <>
            <article className="text-center flex flex-col items-center justify-center gap-5 text-slate-50">
              <HeaderTwo />
              <div className="flex justify-center">
                <div className="w-36 h-36 rounded-full flex items-center justify-center border-4 border-[#00ff1e]">
                  <Check className="w-24 h-24 text-[#00ff1e] stroke-[3]" />
                </div>
              </div>
              <h2 className="text-xl font-bold">Completed</h2>

              <p className="text-sm">
                You’ve created an account. <br />
                wait to be redirected
              </p>
            </article>
          </>
        ) : (
          step
        )}
      </div>
    </section>
  );
}
