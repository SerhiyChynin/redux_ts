import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { postAPI } from "../servises/PostServise";
import { useState } from "react";

const PostContainer = () => {
    const [limit, setLimit] = useState(10);
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
        // pollingInterval: 1000 // для онлайн чатов и тд, типа вебсокета, делает запрос и обновляет каждій промежуток времени.
    })

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])
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