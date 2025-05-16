import React, { useState } from "react";
import Button from "../Components/Button";
import useMultistepsForm from "../hooks/useMultistepsForm";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Success from "./Success";

export default function MultiStepsForm() {
  const [submitted, setSubmitted] = useState(false);
  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultistepsForm([
      <Form1 />,
      <Form2 />,
      <Form3 />,
      <Form4 />,
      <Form5 />,
      <Form6 />,
    ]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      className="w-full h-svh flex justify-center items-center font-[Sora] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#120C7A] to-[#030214]"
      onSubmit={handleSubmit}
    >
      <div
        className={`w-11/12 ${
          isLastStep && !submitted ? "md:w-[57.5rem]" : "md:w-[37.5rem]"
        } rounded-2xl p-1 bg-gradient-to-b from-[#4565DB] to-[#9C39FF] overflow-hidden`}
      >
        <article className="bg-gradient-to-b from-[#343E63] to-[#121318] rounded-xl">
          <div
            style={{
              width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
              transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
            className={`py-2.5 bg-gradient-to-b from-[#4565DB] to-[#9C39FF] `}
          ></div>
          <section className="md:py-10 py-5 md:px-20 px-10 flex flex-col gap-10">
            {submitted ? (
              <Success />
            ) : (
              <>
                {step}
                <div className="flex justify-between w-full gap-4">
                  {isFirstStep && <Button onClick={back} text="Previous" />}
                  {!isLastStep && (
                    <Button type="button" onClick={next} text="Next" />
                  )}
                  {isLastStep && <Button type="submit" text="Submit" />}
                </div>
              </>
            )}
          </section>
        </article>
      </div>
    </form>
  );
}
