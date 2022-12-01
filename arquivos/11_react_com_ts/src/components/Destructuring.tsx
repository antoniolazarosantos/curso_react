import React from 'react'

interface Props  {
    title: string;
    content : string;
    commentQty: number;
    tags: string[];
    // Aplicando enum
    category : Category;
}
export enum Category{
  JS = "Javascript",
  TS = "TypeScript",
  P = "Python",
}

const Destructuring = ({title,content,commentQty,tags,category}: Props) => {
  return (
    <div>
        <h1>Desestruturando Props</h1>
        <p>{title}</p>   
        <p>{content}</p> 
        <p>Qtd comentários: {commentQty}</p>
        {tags.map((t) =>(
            <span>#{t}</span>
        ))}
        <p>Categoria: {category}</p>
    </div>
  )
}

export default Destructuring