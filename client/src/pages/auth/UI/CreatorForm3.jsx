import Button from "../Components/Button";
import Header from "../Components/Header";
import Input from "../Components/Input";

export default function Form3({ displayName, userName, updateFields }) {
  return (
    <>
      <Header span="Cre8Fi?" />

      <fieldset className="flex flex-col gap-6">
        <Input
          type="text"
          name="displayName"
          id="name"
          heading="Display Name"
          placeholder="Willbur Wright"
          value={displayName}
          updateFields={updateFields}
        />
        <Input
          type="text"
          name="userName"
          id="username"
          heading="Username"
          placeholder="Yourbestdesigner123"
          value={userName}
          updateFields={updateFields}
        />
      </fieldset>
    </>
  );
}
