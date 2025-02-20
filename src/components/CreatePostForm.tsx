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
    <div className="flex flex-col items-end gap-2.5">
      <Textarea
        className="w-full"
        label="Description"
        placeholder="Enter your description"
        onValueChange={handleChangeValue}
      />
      <Button color="primary" onPress={handlePress}>
        ボタンだよ
      </Button>
    </div>
  );
};

export default CreatePostForm;
