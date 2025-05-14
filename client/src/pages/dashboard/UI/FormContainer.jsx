import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

export default function FormContainer() {
  return (
    <section className="w-full h-svh flex justify-center items-center font-[Sora] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#120C7A] to-[#030214]">
      <div class="md:min-w-[37.5rem] rounded-2xl p-1 bg-gradient-to-b from-[#4565DB] to-[#9C39FF] overflow-hidden">
        <article className="bg-gradient-to-b from-[#343E63] to-[#121318] rounded-xl">
          <div className="py-2.5 bg-gradient-to-b from-[#4565DB] to-[#9C39FF] w-1/12"></div>

          <Form1 />
          {/* <Form2 /> */}
          {/* <Form3 /> */}
          {/* <Form4 /> */}
        </article>
      </div>
    </section>
  );
}
