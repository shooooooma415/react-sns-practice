import { Card, CardBody } from "@heroui/card";

type PostCardProps = {
  postBody: string;
};

const PostCard = (props: PostCardProps) => {
  return (
    <div>
      <Card>
        <CardBody>
          <p>{props.postBody}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostCard;
