import React from "react";

const PostDetailsPage = ({ post }) => {
  return (
    <div>
      <div className="displayflex">
        <label htmlFor="" className="labelStyle">
          Post Title:
        </label>{" "}
        <h3>{post.title}</h3>
      </div>
      <div className="displayflex">
        <label className="labelStyle" htmlFor="">
          Post Id:
        </label>{" "}
        <p>{post.id}</p>
      </div>

      <div className="displayFlex">
        <label className="labelStyle" htmlFor="">
          Post Content:
        </label>{" "}
        <p>{post.body}</p>
      </div>

      <style jsx>{`
        .displayflex {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .labelStyle {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
};

/* export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}; */

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async(context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default PostDetailsPage;
