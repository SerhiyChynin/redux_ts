import React from "react";
import PostItem from "./PostItem";
import { postAPI } from "../servises/PostServise";

const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10)
        const handleRemove = () => {
        // deletePost(post)
    }
    const handleUpdate = () => {
        // updatePost(post)
    }
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1> }
                {error && <h1>Произошла ошибка при загрузке</h1> }
                {posts && posts?.map(post => 
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
                    )}
            </div>
        </div>
    )
}

export default PostContainer2;