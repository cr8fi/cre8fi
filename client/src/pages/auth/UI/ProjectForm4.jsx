import CheckBox from "../Components/CheckBox";
import Header from "../Components/Header";

const TALENTS = Object.freeze([
  { id: "Creative_Design", text: "Creative & Design" },
  { id: "Content_Community", text: "Content & Community" },
  { id: "Marketing_Branding", text: "Marketing & Branding" },
  { id: "Data_Analytics", text: "Data & Analytics" },
  { id: "CrossChain_Layer2", text: "Cross-Chain & Layer 2 Development" },
  { id: "Frontend_DApps", text: "Frontend Development for DApps" },
  { id: "Strategy_Product", text: "Strategy & Product" },
  { id: "SmartContract_Development", text: "Smart Contract Development" },
  { id: "Web3_Gaming_Metaverse", text: "Web3 Gaming & Metaverse" },
  { id: "DevOps_Tooling", text: "DevOps & Tooling" },
  { id: "Backend_Infrastructure", text: "Backend & Infrastructure" },
  { id: "Tokenomics_DeFi_Engineering", text: "Tokenomics & DeFi Engineering" },
]);
export default function ProjectForm4({ talents, updateFields }) {
  function handleCategoryTalents(id) {
    let newTalents;
    if (talents.includes(id)) {
      newTalents = talents.filter((cat) => cat !== id);
    } else if (talents.length < 3) {
      newTalents = [...talents, id];
    } else {
      newTalents = talents; // Do not add more than 3
    }
    updateFields("talents", newTalents);
  }
  return (
    <>
      <Header text="Select your talent " />
      <fieldset className="flex md:justify-center flex-wrap gap-2">
        {TALENTS.map((talent) => (
          <CheckBox
            key={talent.id}
            id={talent.id}
            name="talents"
            text={talent.text}
            checked={talents.includes(talent.id)}
            disabled={!talents.includes(talent.id) && talents.length >= 3}
            onChange={() => handleCategoryTalents(talent.id)}
          />
        ))}
      </fieldset>
    </>
  );
}
