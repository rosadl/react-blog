import React, {useContext} from 'react';
import PostsContext from "../context/PostsContext";
import { useForm } from "react-hook-form";
export default function New() {
    const context = useContext(PostsContext);
    const { register, handleSubmit, errors } = useForm();
    const onAddNewPost = (post) => {
        context.onAddNewPost(post);
    }
    return (
        <React.Fragment>
            <div>New Post</div>
            <form onSubmit={handleSubmit(onAddNewPost)}>
                <div className="form-control">
                    <label>Title</label>
                    <input type="text" name="title"
                           ref={register({
                               required: 'El campo title es obligatorio',
                           })} />
                </div>
                <div className="form-control">
                    <label>Content</label>
                    <textarea type="text" name="content"
                           ref={register({
                               required: 'El campo content es obligatorio'
                           })}/>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </React.Fragment>
    );
}
