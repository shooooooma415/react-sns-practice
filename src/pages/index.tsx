import DefaultLayout from "@/layouts/default";
import CreatePostForm from "@/components/CreatePostForm";
import PostCard from "@/components/PostCard";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="p-4 flex flex-col gap-2.5">
        <CreatePostForm />
        <PostCard postBody="wwww" />
      </div>
    </DefaultLayout>
  );
}
