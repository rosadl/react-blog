import React, {useContext} from 'react';
import PostsContext from "../context/PostsContext";
import { useForm } from "react-hook-form";
export default function New(props) {
    const context = useContext(PostsContext);
    const { register, handleSubmit, errors } = useForm();
    const onAddNewPost = (post) => {
        context.onAddNewPost(post);
        props.history.push('/all');
    }
    return (
        <React.Fragment>
            <div>New Post</div>
            <form onSubmit={handleSubmit(onAddNewPost)}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"
                           ref={register({
                               required: true
                           })} />
                    {errors.title && <p>El campo título es obligatorio</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content"
                           ref={register({
                               required: true
                           })}/>
                    {errors.title && <p>El campo título es obligatorio</p>}
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </React.Fragment>
    );
}
