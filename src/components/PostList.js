import React from "react";

export default function PostList({ posts, onSelectPost }) {
  return (
    <>
      <div className="post-list">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="post-card"
          >
            <h2 className="post-title">{post.title}</h2>
            {post.summary && <p className="post-summary">{post.summary}</p>}
            <div className="post-footer">
              <span className="post-hint">Click for details</span>
            </div>
          </div>
        ))}
        {posts.length === 0 && <div className="no-posts">No posts found.</div>}
      </div>

      {/* Inline CSS */}
      <style>{`
    .post-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 1rem;
    }

    @media (min-width: 768px) {
      .post-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .post-list {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .post-card {
      background-color: #ffffff;
      border: 1px solid #dbeafe;
      border-radius: 0.75rem;
      padding: 1.25rem;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      outline: none;
    }

    .post-card:hover,
    .post-card:focus {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }

    .post-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1d4ed8;
      margin-bottom: 0.5rem;
    }

    .post-card:hover .post-title {
      text-decoration: underline;
    }

    .post-summary {
      color: #374151;
      font-size: 0.95rem;
      margin-bottom: 0.75rem;
      line-height: 1.5;
    }

    .post-footer {
      margin-top: auto;
    }

    .post-hint {
      font-size: 0.75rem;
      color: #6b7280;
    }

    .no-posts {
      grid-column: 1 / -1;
      text-align: center;
      font-size: 1rem;
      color: #6b7280;
      padding: 2rem 0;
    }
  `}</style>
    </>
  );
}
