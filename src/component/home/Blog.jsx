import React from "react";
import new1 from "../../assets/blue1.jpg"; 
import new2 from "../../assets/blue2.jpg"; // adjust path if needed
import new3 from "../../assets/blue3.jpg"; // if you have a third image

const blogPosts = [
  {
    id: 1,
    title: "Improving lives technology lighthouse ...",
    date: "July 31, 2022",
    author: "Admin",
    image: new1,
  },
  {
    id: 2,
    title: "Technology to Support Business",
    date: "June 29, 2022",
    author: "Admin",
    image:new2,
  },
  {
    id: 3,
    title: "The Top 3 Downfalls to be Aware of.",
    date: "May 13, 2021",
    author: "Admin",
    image: new3, // fallback if you have a 3rd image
  },
];

const Blog = () => {

  return (

    <div className="bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold">Blog Post</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            More articles from our resource library
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {post.date}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">By {post.author}</p>
                <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog