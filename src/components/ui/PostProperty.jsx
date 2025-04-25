import React from 'react';

const PostProperty = () => {
  return (
    <div>
        <div className="flex items-center space-x-2">
                            {/* Free Badge with Shine Effect */}


                            {/* Property Text */}
                            <button className="bg-white flex justify-between bg-opacity-80 p-1 rounded-md text-center">
                                <p className="font-thin pr-1 pl-1">

                                    Post Property
                                </p>
                                <div className="relative  px-2 text-xs flex items-center justify-between  text-white bg-green-500 rounded-md font-semibold overflow-hidden">
                                    <p className="r"> FREE</p>
                                    {/* Shine Effect */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-75"
                                        style={{
                                            animation: "shine 1.5s infinite linear",
                                            transform: "translateX(-100%)",
                                        }}
                                    ></div>
                                </div>
                            </button>

                            {/* Shine Effect Keyframes inside JSX */}
                            <style>
                                {`
      @keyframes shine {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `}
                            </style>
                        </div>
    </div>
  );
}

export default PostProperty;
