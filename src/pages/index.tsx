import DefaultLayout from "@/layouts/default";
import CreatePostForm from "@/components/CreatePostForm";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <CreatePostForm />
    </DefaultLayout>
  );
}
