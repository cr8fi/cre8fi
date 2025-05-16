export default function Input({ heading, paragraph, ...props }) {
  return (
    <div
      className={`flex ${
        props.type === "text" && "flex-col-reverse"
      } text-left`}
    >
      <input
        {...props}
        className={`${
          props.type === "radio" && "hidden"
        } peer w-full bg-transparent p-3 rounded-md border outline-none border-[#4565DB] focus:border-[#9C39FF]`}
      />

      <label
        htmlFor={props.id}
        className={`w-full flex items-center justify-start gap-4 peer-checked:bg-gradient-to-b peer-checked:from-[#4565DB] peer-checked:to-[#9C39FF] peer-checked:bg-[#343E63] rounded-2xl ${
          props.type === "text" ? "mb-2" : "p-2"
        } cursor-pointer transition-all duration-200 ease-in-out`}
      >
        {props.type === "radio" && (
          <div className="rounded-full w-5 h-5 bg-gradient-to-b from-[#4565DB] to-[#9C39FF]">
            <div className="bg-[#343E63] w-4 h-4 m-0.5 rounded-full"></div>
          </div>
        )}
        <div>
          <h2 className="text-xl">{heading}</h2>
          {paragraph && <p className="text-sm">{paragraph}</p>}
        </div>
      </label>
    </div>
  );
}
