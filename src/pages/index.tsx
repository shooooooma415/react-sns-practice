import { useState } from "react";

import DefaultLayout from "@/layouts/default";
import CreatePostForm from "@/components/CreatePostForm";
import PostCardList from "@/components/PostCardList";

export default function IndexPage() {
  const [postList, setPostList] = useState<string[]>([]);

  const handleCreatePost = (body: string) => {
    const renewPostList = [...postList, body];

    setPostList(renewPostList);
  };

  return (
    <DefaultLayout>
      <div className="p-4 flex flex-col gap-2.5">
        <CreatePostForm onCreate={handleCreatePost} />

        <PostCardList />
      </div>
    </DefaultLayout>
  );
}
