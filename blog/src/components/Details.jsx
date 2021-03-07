import React, {useContext} from 'react';
import PostsContext from "../context/PostsContext";

export default function Details(props) {
    const context = useContext(PostsContext);
    const posts = context['posts'];
    const post = posts.find( post => post.id === Number(props.match.params.id));
    return(
        <React.Fragment>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </React.Fragment>
    );
}
