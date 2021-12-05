import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import { getPosts } from "./../store/slide/postSlide";
import ImageComponent from "./imageComponent";

export default function Home({data}) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

//https://picsum.photos/v2/list
//let x = Math.round(Math.random()* 99);

  useEffect(() => {
    console.log("useEffect run!");
    if(!data) return;
    const action = getPosts(data);
    dispatch(action);
  }, []);
// console.log("Here is posts "+JSON.stringify(posts));
  return (
    <div id="container" style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Demo NextJs</h1>
      <div className="wrap" style={{
        margin:"100px",
      display:"flex",
      alignItems: "center",
      flexWrap:"wrap",
      gap:"25px",
      justifyContent:"center", 
      }}>
      {posts && posts.map(post => {
        return <ImageComponent key={post.id} post={post} />
      })}
      </div>
    </div>
  );
}

const randomId = (min,max) => {
  return Math.round(Math.random()*(max - min));
}

export async function getServerSideProps(context) {
  console.log("getStaticProps Run!");
  const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=${randomId(10,20)}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}