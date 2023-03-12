import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    //const list = props.posts
    const ListofArticles = posts.map(post => {
        return <Article key = {post.id} title ={post.title} date = {post.date} preview = {post.preview}/>
    })
  

    return(
        <main>
            {ListofArticles}
        </main>
    )
}

export default ArticleList