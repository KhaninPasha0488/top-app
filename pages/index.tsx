import type { NextPage } from 'next'
import {Button, Htag, P} from "../components";

const Home: NextPage = () => {
  return (
   <>
       <Htag tag="h1">Текст</Htag>
       <Htag tag="h2">Текст</Htag>
       <Htag tag="h3">Текст</Htag>
       <Button appearance="primary" arrow='right'>Кнопка</Button>
       <Button appearance="ghost" arrow='down'>Кнопка</Button>
       <P size='s'>Маленький</P>
       <P >Средний</P>
       <P size='l' >Большой</P>
   </>

  )
}

export default Home
