import React from "react";
import PostItem from "./PostItem";
import { postAPI } from "../servises/PostServise";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1> }
                {error && <h1>Произошла ошибка при загрузке</h1> }
                {posts && posts?.map(post => 
                    <PostItem key={post.id} post={post} />
                    )}
            </div>
        </div>
    )
}

export default PostContainer;