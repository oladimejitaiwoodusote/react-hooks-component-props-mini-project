import React from "react";
import Article from "./Article";

function ArticleList(props){
    const ListofArticles = props.post.map(post => {
        return <Article key = {post.id} title ={post.title} date = {post.date} preview = {post.preview}/>
    })

    return(
        <main>
            {ListofArticles}
        </main>
    )
}

export default ArticleList