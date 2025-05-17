import { useEffect, useState } from "react";
import Button from "../Components/Button";
import useMultistepsForm from "../hooks/useMultistepsForm";
import Form1 from "../UI/Form1";

import Form2 from "../UI/CreatorForm2";
import Form3 from "../UI/CreatorForm3";
import Form4 from "../UI/CreatorForm4";
import Form5 from "../UI/CreatorForm5";
import Form6 from "../UI/CreatorForm6";

import ProjectForm2 from "../UI/ProjectForm2";
import ProjectForm3 from "../UI/ProjectForm3";
import ProjectForm4 from "../UI/ProjectForm4";

import Success from "../UI/Success";

const INITIAL_DATA = {
  howUseCre8Fi: "",
  creator: {
    gender: "",
    displayName: "",
    userName: "",
    DOB: { day: "", month: "", year: "" },
    description: "",
    categories: [],
  },
  project: {
    projectName: "",
    projectOverview: "",
    industries: [],
    talents: [],
  },
};

export default function OnBoardingFlow() {
  const [data, setData] = useState(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);

  function updateFields(field, value) {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  useEffect(() => {
    console.log("Updated Form Data:", data);
  }, [data]);

  const CREATOR_STEPS = [
    <Form2 {...data.creator} updateFields={updateFields} />,
    <Form3 {...data.creator} updateFields={updateFields} />,
    <Form4 {...data.creator} updateFields={updateFields} />,
    <Form5 {...data.creator} updateFields={updateFields} />,
    <Form6 {...data.creator} updateFields={updateFields} />,
  ];

  const PROJECT_STEPS = [
    <ProjectForm2 {...data.project} updateFields={updateFields} />,
    <ProjectForm3 {...data.project} updateFields={updateFields} />,
    <ProjectForm4 {...data.project} updateFields={updateFields} />,
  ];

  const steps = (() => {
    if (data.howUseCre8Fi === "project") {
      return [
        <Form1 {...data} updateFields={updateFields} />,
        ...PROJECT_STEPS,
      ];
    }
    return [<Form1 {...data} updateFields={updateFields} />, ...CREATOR_STEPS];
  })();

  const { currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultistepsForm(steps);
  function handleSubmit(e) {
    e.preventDefault();
    {
      isLastStep ? setSubmitted(true) : next();
    }
  }

  return (
    <form
      className="text-white w-full h-svh flex justify-center items-center font-[Sora] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#120C7A] to-[#030214]"
      onSubmit={handleSubmit}
    >
      <div
        className={`w-11/12 rounded-2xl p-1 bg-gradient-to-b from-[#4565DB] to-[#9C39FF] overflow-hidden
          ${isLastStep && !submitted ? "md:w-[57.5rem]" : "md:w-[37.5rem]"} 
        `}
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
                  <Button type="submit" text={isLastStep ? "Submit" : "Next"} />
                </div>
              </>
            )}
          </section>
        </article>
      </div>
    </form>
  );
}
