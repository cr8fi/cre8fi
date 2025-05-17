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

export default function ProjectForm3({ industries, updateFields }) {
  function handleCategoryIndustries(id) {
    let newIndustries;
    if (industries.includes(id)) {
      newIndustries = industries.filter((cat) => cat !== id);
    } else if (industries.length < 3) {
      newIndustries = [...industries, id];
    } else {
      newIndustries = industries; // Do not add more than 3
    }
    updateFields("industries", newIndustries);
  }
  return (
    <>
      <Header text="Select your industry " />
      <fieldset className="flex md:justify-center flex-wrap gap-2">
        {INDUSTRIES.map((industry) => (
          <CheckBox
            name="industries"
            key={industry.id}
            id={industry.id}
            text={industry.text}
            checked={industries.includes(industry.id)}
            disabled={
              !industries.includes(industry.id) && industries.length >= 3
            }
            onChange={() => handleCategoryIndustries(industry.id)}
          />
        ))}
      </fieldset>
    </>
  );
}
