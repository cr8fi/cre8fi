import CheckBox from "../Components/CheckBox";
import Header from "../Components/Header";

const categories = [
  { id: "Creative_Design", text: "Creative & Design" },
  { id: "Content_Community", text: "Content & Community" },
  { id: "Marketing_Branding", text: "Marketing & Branding" },
  { id: "Data_Analytics", text: "Data & Analytics" },
  {
    id: "Cross-Chain_Layer_2_Development",
    text: "Cross-Chain & Layer 2 Development",
  },
  {
    id: "Frontend_Development_for_Apps",
    text: "Frontend Development for Apps",
  },
  { id: "Strategy_Product", text: "Strategy & Product" },
  { id: "Smart_Contract_Development", text: "Smart Contract Development" },
  { id: "Web3_Gaming_Metaverse", text: "Web3 Gaming & Metaverse" },
  { id: "DevOps_Tooling", text: "DevOps & Tooling" },
  { id: "Backend_Infrastructure", text: "Backend & Infrastructure" },
  { id: "Tokenomics_DeFi_Engineering", text: "Tokenomics & DeFi Engineering" },
];

export default function Form6() {
  return (
    <>
      <Header text="Select up to 3 categories" />
      <fieldset className="flex md:justify-center flex-wrap gap-2">
        {categories.map((cat) => {
          return <CheckBox key={cat.id} id={cat.id} text={cat.text} />;
        })}
      </fieldset>
    </>
  );
}
