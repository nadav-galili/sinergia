import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Author, Post } from "@/sanity/types";
// import { PortableText } from "@portabletext/react";

export type PostCardType = Omit<Post, "author"> & {
  author?: Author;
  mainImageUrl?: string;
};

const PostCard = ({ post }: { post: PostCardType }) => {
  const {
    _id,
    _createdAt,
    views,
    author,
    title,
    // body,
    mainImageUrl,
    category,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          {/* <Link href={`/user/${author?._id}`}> */}
          <p className="text-16-medium line-clamp-1">{author?.name}</p>
          {/* </Link> */}
          <Link href={`/blog/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            <img
              src={mainImageUrl}
              alt="placeholder"
              className="startup-card_img"
            />
          </Link>
        </div>
      </div>

      {/* <Link href={`/blog/${_id}`}>
        {body ? (
          <PortableText value={body} />
        ) : (
          <p className="text-gray-500">No content available</p>
        )}
      </Link> */}

      <div className="flex-between gap-3 mt-5">
        <Link href={`/blog?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/blog/${_id}`}>פרטים</Link>
        </Button>
      </div>
    </li>
  );
};

export const PostCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)} className="startup-card_skeleton"></li>
    ))}
  </>
);

export default PostCard;
