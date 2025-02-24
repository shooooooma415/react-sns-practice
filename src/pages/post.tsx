import CreatePost from "@/components/CreatePost";
import DefaultLayout from "@/layouts/default";

export default function PostTodo() {
  return (
    <DefaultLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-neutral-500">Create ToDo !</h1>
        <CreatePost userAvatar="/profileIcon.png" />
      </div>
    </DefaultLayout>
  );
}
