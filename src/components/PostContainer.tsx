import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { postAPI } from "../servises/PostServise";
import { useState } from "react";
import { IPost } from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
        // pollingInterval: 1000 // для онлайн чатов и тд, типа вебсокета, делает запрос и обновляет каждій промежуток времени.
    })
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost);
}
    
    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])
    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>ADD NEW POST</button>
                {isLoading && <h1>Идет загрузка...</h1> }
                {error && <h1>Произошла ошибка при загрузке</h1> }
                {posts && posts?.map(post => 
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
                    )}
            </div>
        </div>
    )
}

export default PostContainer;