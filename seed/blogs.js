const db = require('../db/connection')
const Blog = require('../models/blog')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const blogs =
    [
      {
        title: "1",
        author: "John Doe",
        img: "johndoeblog1.png",
        content: "ihfdhfjadhfjewnfjenncieoncef"
      },
      {
        title: "2",
        author: "John Doe",
        img: "johndoeblog2.png",
        content: "hfjebfjebfjebfjewfjewhfjew"
      },
      {
        title: "3",
        author: "John Doe",
        img: "johndoeblog3.png",
        content: "jehfjehfehiehifhewfwe"
      },
      {
        title: "4",
        author: "John Doe",
        img: "johndoeblog4.png",
        content: "nujehfviuebrfbeuihgf"
      },
      {
        title: "5",
        author: "John Doe",
        img: "johndoeblog5.png",
        content: "hfioehfiewhfiwehf"
      },
    ]
  await Blog.insertMany(blogs)
  console.log("Created blogs!")
}
const run = async () => {
  await main(
    db.close()
  )
}
run()