import { Likes } from "./facebook";
let likes = new Likes(10, true);
likes.toggle()
console.log(`likes: ${likes.count}, isLiked: ${likes.isLiked}`)
likes.toggle()
console.log(`likes: ${likes.count}, isLiked: ${likes.isLiked}`)
