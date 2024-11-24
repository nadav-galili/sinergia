import React, { Suspense } from "react";
// import { client } from "@/sanity/lib/client";
import { POST_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
// import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
// import PostCard, { PostCardType } from "@/components/PostCard";
import { sanityFetch } from "@/sanity/lib/live";
import View from "@/components/View";
import Header from "@/components/Header";

// Custom component for rendering images
const CustomImage = ({ value }: { value: { asset: { url: string } } }) => {
  return (
    <img
      src={value.asset.url} // Directly use the URL from the asset
      alt={value.asset.url || "Post Image"}
      className="w-full h-auto rounded-xl"
    />
  );
};

// Custom component for rendering links
const CustomLink = ({
  value,
  children,
}: {
  value: { href: string; newTab?: boolean };
  children: React.ReactNode;
}) => {
  return (
    <a
      href={value.href}
      className="text-primary underline hover:text-blue-600" // Add more styling as needed
      target={value.newTab ? "_blank" : "_self"}
      rel={value.newTab ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  );
};

const components: PortableTextComponents = {
  types: {
    image: CustomImage,
  },
  marks: {
    link: ({ value, children, ...props }) => (
      <CustomLink value={value} {...props}>
        {children}
      </CustomLink>
    ),
  },
  block: {
    center: ({ children }) => <div className="text-center">{children}</div>,
  },
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const { data: post } = await sanityFetch({
    query: POST_BY_ID_QUERY,
    params: { id },
  });

  if (!post) {
    notFound();
  }

  return (
    <section className="container mx-auto">
      <Header headerText={post.title} icon="0" />
      <p className="tag  mx-auto">{formatDate(post._createdAt)}</p>

      <section className="section_container">
        <img
          src={post.imageUrl}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3">
              <div>
                <p className="text-20-medium">@ {post.author?.name}</p>
              </div>
            </Link>
            <p className="category-tag">{post.category}</p>
          </div>
          <PortableText value={post.body} components={components} />
        </div>
        <hr className="divider" />
        <Suspense fallback={<div>Loading...</div>}>
          <View id={id} />
        </Suspense>
        {/* {editorPosts.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Editor Picks</p>
            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupCardType, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )} */}
      </section>
    </section>
  );
};

export default Page;
