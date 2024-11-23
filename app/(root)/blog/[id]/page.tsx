import React, { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { POST_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import PostCard, { PostCardType } from "@/components/PostCard";
import { sanityFetch } from "@/sanity/lib/live";
import View from "@/components/View";

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
    <>
      <section className="blue_container pattern !min-h-[230[x]]">
        <p className="tag">{formatDate(post._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
      </section>

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
          <h3 className="text-30-bold">{post.title}</h3>
          <PortableText value={post.body} />
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
    </>
  );
};

export default Page;
