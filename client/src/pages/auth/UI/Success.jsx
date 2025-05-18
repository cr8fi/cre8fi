import Header from "../Components/Header";
import checked from "../assets/checked.svg";
export default function Success() {
  return (
    <>
      <Header text="Go into the world and earn!" />
      <div className="flex justify-center">
        <img src={checked} alt="checked" />
      </div>
    </>
  );
}
