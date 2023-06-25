import { Post } from "@/app/models/post";
import Link from "next/link";

interface Props {
    post: Post;
}

const PostPreview = ({ post }: Props) => {
    return (
        <div className="post-preview">
            <Link href={`/posts/${post.id}`}>
                <h2 className="post-title">
                    {post.title}
                </h2>
            </Link>
            <p className="post-meta">Posted by user {post.userId}</p>
        </div>
    );
}

export default PostPreview;