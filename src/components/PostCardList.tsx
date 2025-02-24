import { useState, useEffect } from "react";
import { ScrollShadow } from "@heroui/scroll-shadow";

import PostCard from "./PostCard";

import { supabase } from "@/utils/supabaseClient";

type Post = {
  created_at: string;
  title: string;
  description: string;
};

const PostCardList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("todos") // ここで `todos` テーブルからデータを取得
          .select("created_at, title, description")
          .order("created_at", { ascending: false }); // 最新の投稿を上に

        if (error) {
          throw error;
        }

        setPosts(data || []); // データが null の場合は空配列
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ScrollShadow className="w-full">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-center">No posts available</p>
      ) : (
        posts.map((post, index) => (
          <PostCard
            key={index}
            created_at={new Date(post.created_at).toLocaleString()}
            description={post.description}
            title={post.title}
            userAvatar="/profileIcon.png"
            username="Shosan"
          />
        ))
      )}
    </ScrollShadow>
  );
};

export default PostCardList;
