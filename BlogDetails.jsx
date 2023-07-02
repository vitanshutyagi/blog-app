import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
      <NavLink to={`/blog/${post.id}`} >
        <span className=' font-bold text-xl'>{post.title}</span>
      </NavLink>
      <p>
        By
        <span className=' text-rose-600 ml-1'>{post.author}</span>
        <span> </span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='ml-1 font-bold text-orange-700'>{post.category}</span>
        </NavLink>
      </p>
      <p> Posted on <span className='underline'>{post.date}</span> </p>
      <p> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className=' text-blue-600'>{`#${tag}`} </span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
