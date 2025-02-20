import DefaultLayout from "@/layouts/default";
import CreatePostForm from "@/components/CreatePostForm";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="p-4">
        <CreatePostForm />
      </div>
    </DefaultLayout>
  );
}
