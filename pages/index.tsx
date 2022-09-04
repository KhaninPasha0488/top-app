import type { NextPage } from 'next'
import {Button, Htag, P, Rating, Tag} from "../components";
import { useState} from "react";
import {withLayout} from "../layaut/Layout";


 function Home() :JSX.Element {
const [rating,setRating] =useState<number>(4)
  return (
   <>
       <Htag tag="h1">Заголовок</Htag>
       <Htag tag="h2">Текст</Htag>
       <Htag tag="h3">Текст</Htag>
       <Button appearance="primary" arrow='right' >Кнопка</Button>
       <Button appearance="ghost" arrow='down'>Кнопка</Button>
       <P size='s'>Маленький</P>
       <P >Средний</P>
       <P size='l' >Большой</P>
       <Tag color="red" size='m'>Red</Tag>
       <Tag color="green" size='m'>Green</Tag>
       <Tag color="primary" size='m'>Primary</Tag>
       <Tag color="gray">Gray</Tag>
       <Tag color="ghost" >Ghost</Tag>
        <Rating rating={rating} isEditable setRating={setRating} />
   </>

  )
}


export default withLayout(Home);
