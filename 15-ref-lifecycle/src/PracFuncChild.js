import React, { useEffect, useState } from 'react';

export default function PracFuncChild({ fakePosts }) {
  console.log(fakePosts);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPost(fakePosts);
    }, 2000);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
