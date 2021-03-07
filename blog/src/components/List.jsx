import React, {useContext} from 'react';
import PostsContext from '../context/PostsContext.jsx'
import { NavLink } from 'react-router-dom';
export default function List(props) {
    const context = useContext(PostsContext)
    const posts = context['posts'];
    return (
        <React.Fragment>
            <h1>LIST OF POSTS</h1>
                {posts.length > 0 && posts.map( post => (
                    <div key={post.id}>
                        <NavLink to={`${props.match.url}/details/${post.id}`} exact><p>{post.title}</p></NavLink>
                    </div>
                ))}
            {!posts.length && <h1>
                No hay ningún post creado, <NavLink to="/all/new"> crea uno nuevo.</NavLink>
            </h1>}
        </React.Fragment>
    );
}


