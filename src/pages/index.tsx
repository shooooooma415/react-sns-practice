import DefaultLayout from "@/layouts/default";
import PostCardList from "@/components/PostCardList";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="p-4 flex flex-col gap-2.5 h-svh">
        <h1 className="text-2xl font-bold text-neutral-500">ToDo List!</h1>
        <PostCardList />
      </div>
    </DefaultLayout>
  );
}
