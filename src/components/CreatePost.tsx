import { useState } from "react";
import { Avatar } from "@heroui/avatar";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Send } from "lucide-react";

import { supabase } from "@/utils/supabaseClient";

const CreatePost = ({ userAvatar }: { userAvatar: string }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeTitle = (value: string) => {
    if (value.length >= 12) {
      return;
    }
    setTitle(value);
  };

  const isBlank = () => {
    if (description == "" || title == "") {
      return true;
    }

    return false;
  };
  const handleSubmit = async () => {
    if (isBlank()) return;

    try {
      setLoading(true);
      const { error } = await supabase
        .from("todos")
        .insert([{ title, description }]);

      if (error) {
        throw error;
      }

      setTitle("");
      setDescription("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex p-4 border-b">
      {/* ユーザーアバター */}
      <Avatar alt="User Avatar" className="w-10 h-10 mr-3" src={userAvatar} />

      {/* 投稿フォーム */}
      <form className="flex flex-col flex-1" onSubmit={handleSubmit}>
        {/* タイトル入力欄 */}
        <Textarea
          className="group flex flex-col w-full text-lg p-1 h-12"
          placeholder="title (Up to 12 characters)"
          value={title}
          onChange={(e) => handleChangeTitle(e.target.value)}
        />

        {/* 投稿入力欄 */}
        <Textarea
          className="w-full text-lg p-1"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* 投稿ボタン */}
        <div className="flex justify-end mt-2">
          <Button
            color="primary"
            isDisabled={isBlank()}
            isLoading={loading}
            startContent={<Send size={16} />}
            type="submit"
            variant="solid"
            onPress={handleSubmit}
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
