import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";

type PostCardProps = {
  username: string;
  userAvatar: string;
  title: string;
  description: string;
  created_at: string;
};

const PostCard = (props: PostCardProps) => {
  return (
    <Card className="w-full max-w-lg p-4" shadow="none">
      <CardBody className="flex gap-3">
        <Avatar
          alt={props.username}
          className="w-10 h-10"
          src={props.userAvatar}
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-bold">{props.username}</span>
            <span className="text-sm text-gray-500">{props.created_at}</span>
          </div>

          <p className="text-gray-900">{props.title}</p>
          <p className="text-gray-700 text-sm">{props.description}</p>

          <div className="flex justify-between mt-2 text-gray-500">
            <Button isIconOnly size="sm" variant="light">
              <MessageCircle size={18} />
            </Button>
            <Button isIconOnly size="sm" variant="light">
              <Repeat2 size={18} />
            </Button>
            <Button isIconOnly size="sm" variant="light">
              <Heart size={18} />
            </Button>
            <Button isIconOnly size="sm" variant="light">
              <Share size={18} />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PostCard;
