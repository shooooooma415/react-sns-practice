import CreatePost from "@/components/CreatePost";
import DefaultLayout from "@/layouts/default";

export default function PostTodo() {
  return (
    <DefaultLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Post Todo</h1>
        <CreatePost userAvatar="/profileIcon.png" />
      </div>
    </DefaultLayout>
  );
}
