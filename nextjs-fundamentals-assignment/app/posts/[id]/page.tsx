'use client';

import Header from "@/app/components/common/header";
import { useEffect, useState } from "react";
import { getData } from "@/app/services/apiService";
import { Post } from "@/app/models/post";

export default function PostDetail({ params }: { params: { id: string } }) {
    const [post, setPost] = useState<Post | null>(null);
    const { id } = params;

    useEffect(() => {
        getData(`posts/${id}`).then(
            (data) => { setPost(data); }
        ).catch((err) => console.log(err));
    }, []);

    return (
        <>
            {post &&
                <><Header imageLink="/img/post-bg.jpg" title={post?.title} subHeading={`By user ${post.userId}`} />
                    <article>
                        <div className="container">
                            <div className="row">
                                {post.body}
                            </div>
                        </div>
                    </article>
                </>
            }
        </>
    );
}