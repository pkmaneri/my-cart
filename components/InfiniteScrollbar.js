// import React, { useEffect, useState } from "react"
// import "./InfiniteScroll.css";


// export function InfiniteScrollbar() {
//     let pageCount = 1;
//     let limit = 4;
//     const [state, setState] = useState([])
//     const [page, setPage] = useState(pageCount)

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}_page=${pageCount}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setState([...state, ...data])
//             })

//     }, [page])

//     const showData = () => {
//         setPage(pageCount++)

//     }
//     window.onscroll = function () {
//         const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
//         if (scrollTop + clientHeight >= scrollHeight) {
//             showData();
//         }
//     }

//     return (
//         <>
//             <div className="container">
//                 <h1>INFINITESCROOLBAR</h1>
//                 {state.map((curEle, index) => {
//                     return (
//                         <div className="posts">
//                             <p className="post-id">{pageCount++}</p>
//                             <h2 className="title">{curEle.title}</h2>
//                             <p className="post-info">{curEle.body}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//         </>

//     )

// }