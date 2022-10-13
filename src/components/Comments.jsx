import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Comments = () => {
  const params = useParams();
  const [commentId, setCommentId] = useState(0)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([])


  async function getCommentsByPost() {
    const response = await axios.get(`http://localhost:8000/api/comment/${params.id}`);
    await setComments(response.data)
  }

  async function removeComment(id) {

    await axios.delete(`http://localhost:8000/api/comment`, {
      data: {
        comment_id: id.target.id
      }
    }).then(res => {
      console.log(res)
    })

  }
  const updateComment = event => {
    event.preventDefault()
    putComment()

  }
  async function putComment(id) {

    await axios.put(`http://localhost:8000/api/comment`, {
      comment_id: commentId,
      newComment: newComment
    }).then(res => {
      console.log(res)
    })
  }

  const commentIdHandler = (e) => {
    setCommentId(e.target.value)
  }
  const newCommentHandler = (e) => {
    setNewComment(e.target.value)
  }

  useEffect(() => {
    getCommentsByPost()
  }, [])
  return (
    <div>
      <button onClick={getCommentsByPost}>Загрузить комментарии</button>

      <div>
        {comments.length === 0
          ? <div className="myinput">Коменнтариев нету</div>
          : comments.map(comment =>
            <div key={comment.id}>
              <div className="mydiv">
                <div>Id комментария:{comment.id}</div>
                <div>{comment.comment}</div>
                <button className="mydiv" id={comment.id} onClick={removeComment}>Удалить из пост</button>
              </div>

            </div>


          )}
      </div>
      <h1 style={{ textAlign: 'center' }}>Изменить пост</h1>
      <form onSubmit={updateComment}>
        <div>
          <input className='myinput' onChange={e => commentIdHandler(e)} value={commentId} name='postId' type='text' placeholder='Введите id комментария' />
        </div>
        <div>
          <input className='myinput' onChange={e => newCommentHandler(e)} value={newComment} name='newPost' type='text' placeholder='Введите новый текст комментария' />
        </div>
        <div>

        </div>
        <div className='myinput'>
          <button className='myinput' type='submit'>Изменить комментарий</button>
        </div>

      </form>
      <Link to={`/Posts`} >
        <button className='myinput'>Посты</button>
      </Link>
      <Link to={`/Home`} >
        <button className='myinput'>Домой</button>
      </Link>
    </div>
  )
}

export default Comments;