const SKILLS = Object.freeze([
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
export default function ProjectForm4() {
  return (
    <>
      <Header text="Select your skill " />
      <fieldset className="flex md:justify-center flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <CheckBox key={skill.id} id={skill.id} text={skill.text} />
        ))}
      </fieldset>
    </>
  );
}
