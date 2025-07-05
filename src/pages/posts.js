import { useState } from "react";
import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [search, setSearch] = useState("");

  // Filter posts based on search input
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      (post.summary &&
        post.summary.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Centered Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center justify-center">
          {" "}
          {/* Added flex centering */}
          <div className="text-center w-full">
            {" "}
            {/* Ensure full width for text centering */}
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              Badminton Chronicles
            </h1>
            <p className="text-gray-600 text-lg font-medium">
              Professional insights and stories from the world of badminton
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Search Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-gray-200 shadow-lg">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search posts by title or content..."
              className="w-full pl-11 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Found {filteredPosts.length} post
              {filteredPosts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Posts List - Always full width now */}
        <div className="w-full">
          <PostList posts={filteredPosts} onSelectPost={setSelectedPost} />
        </div>

        {/* Modal for Post Detail */}
        {selectedPost && (
          <PostDetail
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
