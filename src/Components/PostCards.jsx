import React from 'react';

const PostCards = (props) =>{
return (

  <div className="post-card flex  flex-col p-4 bg-white w-[300px] h-[480px] rounded-2xl shadow-xl m-4 hover:scale-105 transition-transform duration-300 justify-between">
      {/* Image Section */}
      <div className="flex justify-center items-center h-[180px]">
        <img
          src={props.image}
          alt={props.title}
          className="max-h-full object-contain rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col text-center mt-3 flex-1">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{props.title}</h3>
        <p className="text-green-700 font-bold text-xl mt-2">{props.pricing}</p>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{props.body}</p>
        <p className="text-gray-500 italic mt-2">{props.category}</p>
      </div>

      {/* Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition-all duration-200">
        Add to Cart
      </button>
    </div>

);
};
export default PostCards