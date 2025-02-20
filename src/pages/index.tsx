import { Textarea } from "@heroui/input";
import { useState } from "react";
import { Alert } from "@heroui/alert";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const [inputValue, setInputValue] = useState("初期だよ");

  const handleChangeValue = (inputValue: string) => {
    setInputValue(inputValue);
  };

  return (
    <DefaultLayout>
      <Textarea
        className="w-full"
        label="Description"
        placeholder="Enter your description"
        onValueChange={handleChangeValue}
      />
      <Alert color={"success"} title={inputValue} />
    </DefaultLayout>
  );
}
