import SearchForm from "@/components/SearchForm";
import { GET_POSTS } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import Header from "@/components/Header";
import PostCard, { PostCardType } from "@/components/PostCard";
const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams)?.query;
  const params = { search: query || null };

  try {
    const posts = await sanityFetch({ query: GET_POSTS, params });
    console.log("🚀 ~ posts:", posts);

    return (
      <>
        <div className="container mx-auto">
          <Header headerText="Blog" icon="0" />
        </div>
        <section className="flex justify-center  items-center flex-col py-10 px-6">
          <SearchForm query={query} />
        </section>
        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : "כל המאמרים"}
          </p>
          <ul className="mt-7 card_grid">
            {posts?.data?.length > 0 ? (
              posts.data.map((post: PostCardType, index: number) => (
                <PostCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results">לא נמצאו מאמרים</p>
            )}
          </ul>
        </section>
        <SanityLive />
      </>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <p className="error-message">
        לא ניתן לטעון את המאמרים. נסה שוב מאוחר יותר.
      </p>
    );
  }
};

export default BlogPage;
