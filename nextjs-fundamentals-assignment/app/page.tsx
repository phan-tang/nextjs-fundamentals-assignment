'use client';

import { useEffect, useState } from "react";
import Header from "./components/common/header";
import PostPreview from "./components/common/post-preview";
import { getData } from "./services/apiService";
import { Post } from "./models/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getData(`posts`).then(
      (data) => { setPosts(data); }
    ).catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header imageLink="img/home-bg.jpg" title="Clean Blog" subHeading="A Clean Blog Theme by Start Bootstrap" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {posts?.map((post) => {
              return (
                <PostPreview post={post} />
              );
            })}
            <ul className="pager">
              <li className="next">
                <a href="#">Older Posts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};