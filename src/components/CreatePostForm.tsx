import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { useState } from "react";
import { SquarePen } from "lucide-react";

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
        placeholder="今何してる？"
        value={inputValue}
        onValueChange={handleChangeValue}
      />
      <Button
        color="primary"
        endContent={<SquarePen size={16} />}
        isDisabled={isBlank()}
        onPress={handlePress}
      >
        Post
      </Button>
    </div>
  );
};

export default CreatePostForm;
