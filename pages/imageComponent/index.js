import React from 'react'
import { useSelector } from 'react-redux';

export default function ImageComponent() {
    const posts = useSelector((state) => state.posts);
    console.log("img component" + JSON.stringify(posts));
    return (
        <div>
            
        </div>
    )
}
