import React, {createContext, useState} from 'react'
const PostsContext = createContext(null)

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([])

    const onAddNewPost = (post) => {
        post.id = posts.length + 1;
        setPosts([...posts, post])
    }
    return (
        <PostsContext.Provider value={{
            posts, onAddNewPost
        }}
        >
            {children}
        </PostsContext.Provider>
    )
}
export default PostsContext
