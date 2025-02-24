import { useState } from "react";
import { Avatar } from "@heroui/avatar";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Send } from "lucide-react";

const CreatePost = ({ userAvatar }: { userAvatar: string }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    setTitle("");
    setDescription("");
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
            startContent={<Send size={16} />}
            type="submit"
            variant="solid"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
