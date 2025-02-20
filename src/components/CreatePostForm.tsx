import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { useState } from "react";

type CreatePostFormProps = {
  onCreate: (inputString: string) => void;
};

const CreatePostForm = (props: CreatePostFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeValue = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const handlePress = () => {
    props.onCreate(inputValue);
    setInputValue("");
  };

  const isBlank = () => {
    if (inputValue == "") {
      return true;
    }

    return false;
  };

  return (
    <div className="flex flex-col items-end gap-2.5">
      <Textarea
        className="w-full"
        label="Description"
        placeholder="Enter your description"
        value={inputValue}
        onValueChange={handleChangeValue}
      />
      <Button color="primary" isDisabled={isBlank()} onPress={handlePress}>
        ボタンだよ
      </Button>
    </div>
  );
};

export default CreatePostForm;
