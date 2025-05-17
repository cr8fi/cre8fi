import CheckBox from "../Components/CheckBox";
import Header from "../Components/Header";

const CATEGORIES = Object.freeze([
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
]);

export default function Form6({ categories, updateFields }) {
  function handleCategoryChange(id) {
    let newCategories;
    if (categories.includes(id)) {
      newCategories = categories.filter((cat) => cat !== id);
    } else if (categories.length < 3) {
      newCategories = [...categories, id];
    } else {
      newCategories = categories; // Do not add more than 3
    }
    updateFields("categories", newCategories);
  }
  return (
    <>
      <Header text="Select up to 3 categories" />
      <fieldset className="flex md:justify-center flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <CheckBox
            key={cat.id}
            id={cat.id}
            text={cat.text}
            checked={categories.includes(cat.id)}
            disabled={!categories.includes(cat.id) && categories.length >= 3}
            onChange={() => handleCategoryChange(cat.id)}
          />
        ))}
      </fieldset>
    </>
  );
}
