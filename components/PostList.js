import React from "react";
import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="grid">
          <Link href={`/posts/${post.id}`}>
            <a className="card">
              <h1>{post.title}</h1>
            </a>
          </Link>
        </div>
      ))}

      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          max-width: 300px;
        }
      `}</style>
    </div>
  );
};

export default PostList;
