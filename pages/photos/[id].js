import React from "react";

const PhotoDetailsPage = ({ photo }) => {
  return (
    <div>
      <div className="displayflex">
        <label htmlFor="" className="labelStyle">
          Photo Title:
        </label>{" "}
        <h3>{photo.title}</h3>
      </div>

      <div className="displayFlex">
        <label className="labelStyle" htmlFor="">
          Photo Image:
        </label>
        <img src={photo.thumbnailUrl} alt="" />
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

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/photos/${context.params.id}`
  );

  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export default PhotoDetailsPage;
