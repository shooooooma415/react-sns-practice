import { Alert } from "@heroui/alert";
import { Textarea } from "@heroui/input";
import { useState } from "react";

const CreatePostForm = () => {
  const [inputValue, setInputValue] = useState("初期だよ");

  const handleChangeValue = (inputValue: string) => {
    setInputValue(inputValue);
  };

  return (
    <>
      <Textarea
        className="w-full"
        label="Description"
        placeholder="Enter your description"
        onValueChange={handleChangeValue}
      />
      <Alert color={"success"} title={inputValue} />
    </>
  );
};

export default CreatePostForm;
