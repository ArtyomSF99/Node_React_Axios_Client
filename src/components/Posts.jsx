import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState('')
    const [comment, setComment] = useState('')
    const [postId, setPostId] = useState(0)
    const [newPost, setNewPost] = useState('')

    async function getPosts() {
        const response = await axios.get(`http://localhost:8000/api/posts`);
        await setPosts(response.data)
    }
    async function removePost(id) {

        await axios.delete(`http://localhost:8000/api/post`, {
            data: {
                post_id: id.target.id
            }
        }).then(res => {
            console.log(res)
        })

    }
    async function putPost(id) {

        await axios.put(`http://localhost:8000/api/post`, {
            post_id: postId,
            newPost: newPost
        }).then(res => {

        })
    }
    async function sendPost() {
        await axios.post('http://localhost:8000/api/posts', {
            "user_id": user.id,
            "post": post
        }).then(res => {

            console.log(res)
        })
    }
    async function sendComment() {
        await axios.post('http://localhost:8000/api/comment', {
            "post_id": postId,
            "comment": comment
        }).then(res => {

            console.log(res)
        })
    }
    const postHandler = (e) => {
        setPost(e.target.value)
    }
    const postIdHandler = (e) => {
        setPostId(e.target.value)
    }
    const newPostHandler = (e) => {
        setNewPost(e.target.value)
    }
    const commentHandler = (e) => {
        setComment(e.target.value)
    }



    const addPost = event => {
        event.preventDefault()
        sendPost()
    }
    
    const updatePost = event => {
        event.preventDefault()
        putPost()

    }
    const addComment = event => {
        event.preventDefault()
        sendComment()
    }
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div>

            <div>

                {posts.length === 0
                    ? <div className="myinput">У вас нету друзей</div>
                    : posts.map(post =>
                        <div key={post.id}>
                            <div className="mydiv">
                                <div>User Id:{post.user_id}</div>
                                <div>Post Id:{post.id}</div>
                                <h2>{post.post}</h2>

                                <button className="mydiv" id={post.id} onClick={removePost}>Удалить из пост</button>
                                <Link to={`/comment/${post.id}`} >
                                    <button className='mydiv'>Комментарии</button>
                                </Link>

                            </div>
                        </div>


                    )}
            </div>
            <h1 style={{ textAlign: 'center' }}>Добавить пост</h1>
            <form onSubmit={addPost}>
                <div>
                    <input className='myinput' onChange={e => postHandler(e)} value={post} name='post' type='text' placeholder='Введите текст поста' />
                </div>
                <div>

                </div>
                <div className='myinput'>
                    <button className='myinput' type='submit'>Создать пост</button>
                </div>

            </form>
            <h1 style={{ textAlign: 'center' }}>Изменить пост</h1>
            <form onSubmit={updatePost}>
                <div>
                    <input className='myinput' onChange={e => postIdHandler(e)} value={postId} name='postId' type='text' placeholder='Введите id поста' />
                </div>
                <div>
                    <input className='myinput' onChange={e => newPostHandler(e)} value={newPost} name='newPost' type='text' placeholder='Введите новый текст поста' />
                </div>
                <div>

                </div>
                <div className='myinput'>
                    <button className='myinput' type='submit'>Изменить пост</button>
                </div>

            </form>
            <h1 style={{ textAlign: 'center' }}>Добавить коммент</h1>
            <form onSubmit={addComment}>
                <div>
                    <input className='myinput' onChange={e => postIdHandler(e)} value={postId} name='postId' type='text' placeholder='Введите id поста' />
                </div>
                <div>
                    <input className='myinput' onChange={e => commentHandler(e)} value={comment} name='comment' type='text' placeholder='Введите комментарий' />
                </div>
                <div>

                </div>
                <div className='myinput'>
                    <button className='myinput' type='submit'>Добавить комментарий</button>
                </div>

            </form>
            <Link to={`/RequestList`} >
                <button className='myinput'>Запросы добавления в друзья</button>
            </Link>
            <Link to={`/Home`} >
                <button className='myinput'>Домой</button>
            </Link>
        </div>
    )
}

export default Posts