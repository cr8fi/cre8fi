import CheckBox from "../Components/CheckBox";
import Header from "../Components/Header";

const INDUSTRIES = Object.freeze([
  { id: "DeFi", text: "DeFi (Decentralized Finance)" },
  { id: "NFTs_Digital_Collectibles", text: "NFTs & Digital Collectibles" },
  { id: "Gaming_Metaverse", text: "Gaming & Metaverse" },
  { id: "AI_Autonomous_Agents", text: "AI & Autonomous Agents" },
  { id: "Infrastructure_Protocols", text: "Infrastructure & Protocols" },
  { id: "Security_Audits", text: "Security & Audits" },
  { id: "Data_Indexing", text: "Data & Indexing" },
  {
    id: "Tokenization_Asset_Management",
    text: "Tokenization & Asset Management",
  },
  { id: "Identity_Reputation", text: "Identity & Reputation" },
  { id: "DAOs_Governance", text: "DAOs & Governance" },
  { id: "Social_Creator_Economy", text: "Social & Creator Economy" },
  { id: "Enterprise_B2B", text: "Enterprise & B2B" },
]);

export default function ProjectForm3() {
  return (
    <>
      <Header text="Select your industry " />
      <fieldset className="flex md:justify-center flex-wrap gap-2">
        {INDUSTRIES.map((industry) => (
          <CheckBox key={industry.id} id={industry.id} text={industry.text} />
        ))}
      </fieldset>
    </>
  );
}
