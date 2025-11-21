import { useQuery } from "@tanstack/react-query";
import { MadeWithDyad } from "@/components/made-with-dyad";
import FetchDataButton from "@/components/FetchDataButton";
import { fetchPosts, Post } from "@/lib/api";

const Index = () => {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <FetchDataButton />
        <div className="mt-8 w-full max-w-2xl">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && (
            <div>
              <h1 className="text-2xl font-bold mb-4">Posts</h1>
              <ul className="space-y-4">
                {data.slice(0, 5).map((post: any) => (
                  <li key={post.id} className="p-4 border rounded-lg">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p>{post.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;
