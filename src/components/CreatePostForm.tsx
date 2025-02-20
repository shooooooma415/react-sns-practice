import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { useState } from "react";

const CreatePostForm = () => {
  const [inputValue, setInputValue] = useState("初期だよ");

  const handleChangeValue = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const handlePress = () => {
    alert(inputValue);
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
      <Button color="primary" onPress={handlePress}>
        ボタンだよ
      </Button>
    </>
  );
};

export default CreatePostForm;
