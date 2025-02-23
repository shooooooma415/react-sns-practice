import PostCard from "./PostCard";

const PostCardList = () => {
  return (
    <div>
      <PostCard
        created_at="2h ago"
        description="HeroUIのコンポーネントを活用して、簡単にXの投稿カードを実装できます！"
        title="React & HeroUIでX風のUIを作ってみた"
        userAvatar="/profileIcon.png"
        username="Shosan"
      />
    </div>
  );
};

export default PostCardList;
