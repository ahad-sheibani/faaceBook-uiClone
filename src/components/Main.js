import React from 'react';
import '../styles/app.css'

function Main(props) {
    return (
        <div className="flex justify-center   ">
            {/* left menu */}
            <div className="w-1/5 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0 ">
                <ul className="p-4">
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/avatar.jpg" className="w-10 h-10 rounded-full" />
                            <span className="font-semibold">Ahad Sheibani</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/friends.png" className="w-10 h-10 rounded-full" />
                            <span className="font-semibold">Friends</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/page.png" className="w-10 h-10 rounded-full" />
                            <span className="font-semibold">Pages</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/memory.png" className="w-10 h-10 rounded-full" />
                            <span className="font-semibold">Memories</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/group.png" className="w-10 h-10 rounded-full" />
                            <span className="font-semibold">Group</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                                <box-icon name='chevron-down'></box-icon>
                            </span>
                            <span className="font-semibold">See more</span>
                        </a>
                    </li>
                    <li className="border-b border-gray-200 dark:border-dark-third mt-6"></li>
                </ul>
                <div className="flex justify-between items-center px-4 h-4 group">
                    <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Your Shortcut</span>
                    <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third 
                p-2 rounded-md  group-hover:inline-block">Edit</span>
                </div>
                <ul className="p-4">
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/group-img-1.jpg" className="w-10 h-10 rounded-lg" />
                            <span className="font-semibold">coding css HTML java script</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/group-img-2.jpg" className="w-10 h-10 rounded-lg" />
                            <span className="font-semibold">coding tailwindcss</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/group-img-3.jpg" className="w-10 h-10 rounded-lg" />
                            <span className="font-semibold">coding css HTML java script</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <img src="/images/group-img-4.jpg" className="w-10 h-10 rounded-lg" />
                            <span className="font-semibold">code doing ui/ux design</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg:dark-third">
                            <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                                <box-icon name='chevron-down'></box-icon>
                            </span>
                            <span className="font-semibold">See more</span>
                        </a>
                    </li>
                </ul>
                <div className="mt-auto p-6 text-sm text-gray-500 dark:text-dark">
                    <a href="#">Privacy</a>
                    <span>.</span>
                    <a href="#">Terms</a>
                    <span>.</span>
                    <a href="#">Advertising</a>
                    <span>.</span>
                    <a href="#">Cookies</a>
                    <span>.</span>
                    <a href="#">Ad Choice</a>
                    <span>.</span>
                    <a href="#">More</a>
                    <span>.</span>
                    <span>Facebook @ 2021</span>

                </div>
            </div>

            {/* mainMenu */}
            <div className="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
                {/* story */}
                <div className="relative flex space-x-2 pt-4">
                    <div className="w-1/4 sm:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
                        <div className="h-3/5 overflow-hidden">
                            <img src="/images/avatar.jpg" alt="picture" className="group-hover:transform group-hover:scale-110 transition-all duration-1000" />
                        </div>
                        <div className="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
                            <span className="font-semibold">
                                Create a <br /> Story
                            </span>
                            <div className="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
                                <box-icon name='plus'></box-icon>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                        <div className="relative h-full group cursor-pointer">
                            <img src="/images/story.jpg " alt="story-image" className="group-hover:transform group-hover:scale-110 transition-all duration-1000 h-full w-full" />
                            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                            <span className="absolute bottom-0 left-1 pb-2 font-semibold text-white">
                                Your story
                            </span>
                            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                                <img src="/images/avatar.jpg" />

                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                        <div className="relative h-full group cursor-pointer">
                            <img src="/images/story-1.jpg " alt="story-image" className="group-hover:transform group-hover:scale-110 transition-all duration-1000 h-full w-full" />
                            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                            <span className="absolute bottom-0 left-1 pb-2 font-semibold text-white">
                                Rose
                            </span>
                            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                                <img src="/images/avt-5.jpg" />

                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                        <div className="relative h-full group cursor-pointer">
                            <img src="/images/story-3.jpg " alt="story-image" className="group-hover:transform group-hover:scale-110 transition-all duration-1000 h-full w-full" />
                            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                            <span className="absolute bottom-0 left-1 pb-2 font-semibold text-white">
                                John
                            </span>
                            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                                <img src="/images/avt-2.jpg" />

                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                        <div className="relative h-full group cursor-pointer">
                            <img src="/images/story-2.jpg " alt="story-image" className="group-hover:transform group-hover:scale-110 transition-all duration-1000 h-full w-full" />
                            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                            <span className="absolute bottom-0 left-1 pb-2 font-semibold text-white">
                                David
                            </span>
                            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                                <img src="/images/avt-6.png" />

                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                        <div className="relative h-full group cursor-pointer">
                            <img src="/images/story-4.jpg " alt="story-image" className="group-hover:transform group-hover:scale-110 transition-all duration-1000 h-full w-full" />
                            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                            <span className="absolute bottom-0 left-1 pb-2 font-semibold text-white">
                                LILi
                            </span>
                            <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                                <img src="/images/avt-4.jpg" />

                            </div>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl bg-white absolute -right-6
                    top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow
                    text-gray-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt
                    ">
                        <box-icon name='right-arrow-alt'></box-icon>
                    </div>
                </div>
                {/* End Story */}
                {/* Post Form */}
                <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
                    <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4" >
                        <img src="/images/avatar.jpg" className="h-10 w-10 round-full" />
                        <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start
                        pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt
                        ">
                            <span>
                                what's on your mind, Ahad?
                            </span>
                        </div>
                    </div>
                    <div className="p-2 flex">
                        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 
                        dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                            <box-icon type='solid' name='video-plus'></box-icon>
                            <span className="text-xs sm:text-sm font-semibold text-green-500 dark:text-dark-txt">Live video</span>
                        </div>
                        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 
                        dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                            <box-icon name='image' type='solid' ></box-icon>
                            <span className="text-xs sm:text-sm font-semibold text-red-500 dark:text-dark-txt">Live video</span>
                        </div>
                        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 
                        dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg  cursor-pointer text-yellow-500">
                            <box-icon name='smile' className='text-yellow-200' ></box-icon>
                            <span className="text-xs sm:text-sm font-semibold text-yellow-500 dark:text-dark-txt">Live video</span>
                        </div>
                    </div>
                </div>
                {/*  End of Post Form */}
                {/* room */}
                <div className="p-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second overflow-hidden">
                    <div className="flex space-x-4 relative">
                        <div className="w-1/2 lg:w-3/12 flex  items-center justify-center border-2 border-blue-200 dark:border-blue-700 rounded-full cursor-pointer">
                            <box-icon name='video-plus' type='solid' className=" text-purple-500" ></box-icon>
                            <span className="text-sm font-semibold text-blue-500 ">Create Room</span>
                        </div>
                        <div className="relative cursor-pointer">
                            <img src="/images/avt-3.jpg" alt="profile" className="rounded-full" />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div className="relative cursor-pointer">
                            <img src="/images/avt-4.jpg" alt="profile" className="rounded-full" />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div className="relative cursor-pointer">
                            <img src="/images/avt-5.jpg" alt="profile" className="rounded-full" />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div className="relative cursor-pointer">
                            <img src="/images/avt-2.jpg" alt="profile" className="rounded-full" />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div className="relative cursor-pointer hidden sm:inline">
                            <img src="/images/avt-4.jpg" alt="profile" className="rounded-full" />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div className="relative cursor-pointer hidden sm:inline">
                            <img src="/images/avt-7.jpg" alt="profile" className="rounded-full" />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div className="relative cursor-pointer hidden sm:inline">
                            <img src="/images/avt-5.jpg" alt="profile" className="rounded-full" />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div className="w-12 h-12 rounded-full  hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute 
                        right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow 
                        dark:bg-dark-third dark:border-dark-third dark:text-dark-txt
                        ">
                            <box-icon type='solid' name='chevron-right'></box-icon>
                        </div>
                    </div>
                </div>
                {/* end of room */}
                {/* list post */}
                <div>
                    {/* post */}
                    <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">

                        <div className="flex items-center justify-between px-4 py-2">
                            <div className="flex space-x-2 items-center">


                                <div className="relative">
                                    <img src="/images/avt-2.jpg" alt='profile' className="w-10 h-10 rounded-full" />
                                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                                </div>
                                <div>
                                    <div className="font-semibold">
                                        John
                                    </div>
                                    <span className="text-sm text-gray-500">38m</span>
                                </div>

                            </div>
                            <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt
                                dark:hover:bg-dark-third rounded-full cursor-pointer
                                ">
                                <box-icon name='dots-horizontal-rounded' ></box-icon>
                            </div>
                        </div>
                        {/* postContent */}
                        <div className="text-justify px-4 py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        {/* end of post content */}
                        {/* post Image */}
                        <div className="py-2">
                            <img src="/images/post.png" alt="post" />
                        </div>
                        {/* end of post image */}
                        {/* post react */}
                        <div className="px-4 py-2">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-row-reverse items-center">
                                    <span className="ml-2 text-gray-500 dark:text-dark-txt">999</span>
                                    <span className="rounded-full grid place-items-center text-2xl ml-1 fill-current text-red-800  "><box-icon name='wink-smile' ></box-icon></span>
                                    <span className="rounded-full grid place-items-center text-2xl ml-1 fill-current text-red-500 "><box-icon name='happy-heart-eyes' type='solid' ></box-icon></span>
                                    <span className="rounded-full grid place-items-center text-2xl ml-1 fill-current text-yellow-500 "><box-icon name='heart' type='solid' ></box-icon></span>
                                </div>
                                <div className="text-gray-500 dark:text-dark-txt">
                                    <span >99Comments</span>
                                    <span > 66Shares</span>
                                </div>
                            </div>

                        </div>
                        {/* end of post react */}
                        {/* postAction */}
                        <div className="border border-gray-200 dark:border-dark-third border-1-0 border-r-0 py-1">
                        <div className="py-2 px-4">
                            <div className="flex space-x-2">
                                <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100
                                dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer fill-current text-gray-500 dark:text-dark-txt
                                 ">
                                <box-icon name='like' ></box-icon>
                                <span className="text-sm font-semibold">Like</span>
                                </div>
                                <div  className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100
                                dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer fill-current text-gray-500 dark:text-dark-txt
                                 " >
                                <box-icon name='comment' ></box-icon>
                                <span className="text-sm font-semibold">Comment</span>
                                </div>
                                <div  className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100
                                dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer fill-current text-gray-500 dark:text-dark-txt
                                 " >
                                <box-icon name='share' type='solid' ></box-icon>
                                <span className="text-sm font-semibold">Share</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* end of post action */}
                        {/* listComment */}
                        <div className="py-2 px-4">
                            {/* comment */}
                            <div className="flex space-x-2">
                            
                                <img src="/images/avt-5.jpg" alt="profile" className="w-9 h-9 rounded-full"/>
                                <div>
                                    <div className="bg-gray-200 dark:bg:-dark-third p-2 rounded-2xl text-sm" >
                                        <span className="font-semibold block">Rebecca</span>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </span>
                                    </div>
                                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                                        <span className="font-semibold cursor-pointer">Like</span>
                                        <span>.</span>
                                        <span className="font-semibold cursor-pointer">Reply</span>
                                        <span>.</span>
                                        10m
                                    </div>
                                    <div className="flex space-x-2">
                                <img src="/images/avt-7.jpg" alt="profile" className="w-9 h-9 rounded-full"/>
                                <div>
                                    <div className="bg-gray-200 dark:bg:-dark-third p-2 rounded-2xl text-sm" >
                                        <span className="font-semibold block">Rose</span>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </span>
                                    </div>
                                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                                        <span className="font-semibold cursor-pointer">Like</span>
                                        <span>.</span>
                                        <span className="font-semibold cursor-pointer">Reply</span>
                                        <span>.</span>
                                        10m
                                    </div>
                                </div>

                            </div>
                                </div>

                            </div>
                            {/* end of Comment */}
                        </div>
                        {/* endofListComment */}

                        {/* commentform */}
                        <div className="py-2 px-4">
                        <div className="flex space-x-2">
                        <img src="/images/avatar.jpg" alt="profile" className="rounded-full w-9 h-9"/>
                        <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                            <input className="outline-none bg-transparent flex-1" type="text" placeholder="write a comment..."/>
                            <div className="flex space-x-0 items-center justify-center">
                                <span className="w-7 h-7 grid place-items-center rounded-full hover:bg:gray-200 cursor-pointer fill-current text-gray-500
                                dark:text-dark-txt dark:hover:bg-dark-second text-xl"><box-icon name='smile' ></box-icon></span>
                                <span className="w-7 h-7 grid place-items-center rounded-full hover:bg:gray-200 cursor-pointer fill-current text-gray-500
                                dark:text-dark-txt dark:hover:bg-dark-second text-xl"><box-icon name='camera' type='solid' ></box-icon></span>
                                <span className="w-7 h-7 grid place-items-center rounded-full hover:bg:gray-200 cursor-pointer fill-current text-gray-500
                                dark:text-dark-txt dark:hover:bg-dark-second text-xl"><box-icon name='file-gif' type='solid' ></box-icon></span>
                                <span className="w-7 h-7 grid place-items-center rounded-full hover:bg:gray-200 cursor-pointer fill-current text-gray-500
                                dark:text-dark-txt dark:hover:bg-dark-second text-xl"><box-icon name='happy' type='solid' ></box-icon></span>
                            </div>
                        </div>

                        </div>

                        </div>
                        {/* endOfcommentform */}

                    </div>

                    {/* end of post */}
                </div>
                <div>
                    {/* post */}
                    <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">

                        <div className="flex items-center justify-between px-4 py-2">
                            <div className="flex space-x-2 items-center">


                                <div className="relative">
                                    <img src="/images/avt-2.jpg" alt='profile' className="w-10 h-10 rounded-full" />
                                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                                </div>
                                <div>
                                    <div className="font-semibold">
                                        John
                                    </div>
                                    <span className="text-sm text-gray-500">38m</span>
                                </div>

                            </div>
                            <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt
                                dark:hover:bg-dark-third rounded-full cursor-pointer
                                ">
                                <box-icon name='dots-horizontal-rounded' ></box-icon>
                            </div>
                        </div>
                        {/* postContent */}
                        <div className="text-justify px-4 py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        {/* end of post content */}
                        {/* post Image */}
                        <div className="py-2">
                        <div className="grid grid-cols-2 gap-1">
                        <img src="/images/post-2 (1).jpg" alt="post" />
                        <img src="/images/post-2 (2).jpg" alt="post" />
                        <img src="/images/post-2 (3).jpg" alt="post" />
                        <img src="/images/post-2 (4).jpg" alt="post" />

                        </div>
                        </div>
                        {/* end of post image */}
                        {/* post react */}
                        <div className="px-4 py-2">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-row-reverse items-center">
                                    <span className="ml-2 text-gray-500 dark:text-dark-txt">999</span>
                                    <span className="rounded-full grid place-items-center text-2xl ml-1 fill-current text-red-800  "><box-icon name='wink-smile' ></box-icon></span>
                                    <span className="rounded-full grid place-items-center text-2xl ml-1 fill-current text-red-500 "><box-icon name='happy-heart-eyes' type='solid' ></box-icon></span>
                                    <span className="rounded-full grid place-items-center text-2xl ml-1 fill-current text-yellow-500 "><box-icon name='heart' type='solid' ></box-icon></span>
                                </div>
                                <div className="text-gray-500 dark:text-dark-txt">
                                    <span >99Comments</span>
                                    <span > 66Shares</span>
                                </div>
                            </div>

                        </div>
                        {/* end of post react */}
                        {/* postAction */}
                        
                        <div className="border border-gray-200 dark:border-dark-third border-1-0 border-r-0 py-1">
                        <div className="py-2 px-4">
                        <div className="flex space-x-2">
                                <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100
                                dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer fill-current text-gray-500 dark:text-dark-txt
                                 ">
                                <box-icon name='like' ></box-icon>
                                <span className="text-sm font-semibold">Like</span>
                                </div>
                                <div  className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100
                                dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer fill-current text-gray-500 dark:text-dark-txt
                                 " >
                                <box-icon name='comment' ></box-icon>
                                <span className="text-sm font-semibold">Comment</span>
                                </div>
                                <div  className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100
                                dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer fill-current text-gray-500 dark:text-dark-txt
                                 " >
                                <box-icon name='share' type='solid' ></box-icon>
                                <span className="text-sm font-semibold">Share</span>
                                </div>
                            </div>

                        </div>
                           
                        </div>
                        {/* end of post action */}
                        {/* listComment */}
                        <div className="py-2 px-4">
                            {/* comment */}
                            <div className="flex space-x-2">
                            
                                <img src="/images/avt-5.jpg" alt="profile" className="w-9 h-9 rounded-full"/>
                                <div>
                                    <div className="bg-gray-200 dark:bg:-dark-third p-2 rounded-2xl text-sm" >
                                        <span className="font-semibold block">Rebecca</span>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </span>
                                    </div>
                                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                                        <span className="font-semibold cursor-pointer">Like</span>
                                        <span>.</span>
                                        <span className="font-semibold cursor-pointer">Reply</span>
                                        <span>.</span>
                                        10m
                                    </div>
                                    <div className="flex space-x-2">
                                <img src="/images/avt-7.jpg" alt="profile" className="w-9 h-9 rounded-full"/>
                                <div>
                                    <div className="bg-gray-200 dark:bg:-dark-third p-2 rounded-2xl text-sm" >
                                        <span className="font-semibold block">Rose</span>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </span>
                                    </div>
                                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                                        <span className="font-semibold cursor-pointer">Like</span>
                                        <span>.</span>
                                        <span className="font-semibold cursor-pointer">Reply</span>
                                        <span>.</span>
                                        10m
                                    </div>
                                </div>

                            </div>
                                </div>

                            </div>
                            {/* end of Comment */}
                        </div>
                        {/* endofListComment */}

                        {/* commentform */}
                        <div className="py-2 px-4">
                        <div className="flex space-x-2">
                        <img src="/images/avatar.jpg" alt="profile" className="rounded-full w-9 h-9"/>
                        <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                            <input className="outline-none bg-transparent flex-1" type="text" placeholder="write a comment..."/>
                            <div className="flex space-x-0 items-center justify-center">
                                <span className="w-7 h-7 grid place-items-center rounded-full hover:bg:gray-200 cursor-pointer fill-current text-gray-500
                                dark:text-dark-txt dark:hover:bg-dark-second text-xl"><box-icon name='smile' ></box-icon></span>
                                <span className="w-7 h-7 grid place-items-center rounded-full hover:bg:gray-200 cursor-pointer fill-current text-gray-500
                                dark:text-dark-txt dark:hover:bg-dark-second text-xl"><box-icon name='camera' type='solid' ></box-icon></span>
                                <span className="w-7 h-7 grid place-items-center rounded-full hover:bg:gray-200 cursor-pointer fill-current text-gray-500
                                dark:text-dark-txt dark:hover:bg-dark-second text-xl"><box-icon name='file-gif' type='solid' ></box-icon></span>
                                <span className="w-7 h-7 grid place-items-center rounded-full hover:bg:gray-200 cursor-pointer fill-current text-gray-500
                                dark:text-dark-txt dark:hover:bg-dark-second text-xl"><box-icon name='happy' type='solid' ></box-icon></span>
                            </div>
                        </div>

                        </div>

                        </div>
                        {/* endOfcommentform */}

                    </div>

                    {/* end of post */}
                </div>
                {/* end of list post */}
            </div>
            {/* End of main menu */}
            {/* rightMenu */}
            <div className="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0 ">
                <div className="h-full">
                    <div className="flex justify-between items-center px-4  ">
                        <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Friend requests</span>
                        <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third 
                p-2 rounded-md  ">See All</span>
                    </div>
                    <div className="p-2">
                        <a href="#" className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third
                    rounded-lg transition-all
                    ">
                            <img src="./images/avt.jpg" alt="profile" className="w-16 h-16 rounded-full" />
                            <div className="flex-1 h-full">
                                <div className="dark:text-dark-txt">
                                    <span className="font-semibold">Zahra Akbari</span>
                                    <span className="float-right">6d</span>
                                </div>
                                <div className="flex space-x-2 mt-2">
                                    <div className="w-1/2 bg-blue-500 cursor-pointer py-1 px-2 text-center font-semibold text-white rounded-lg">
                                        Confirm
                                    </div>
                                    <div className="w-1/2 bg-gray-300 cursor-pointer py-1 px-2 text-center font-semibold text-black rounded-lg">
                                        Delete
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="border-b border-gray-200 dark:border-dark-third mt-6"></div>
                    {/* contacts */}
                    <div className="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
                        <span className="font-semibold text-lg">Contacts</span>
                        <div className="flex space-x-1">
                            <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                                <box-icon name='search-alt-2' ></box-icon>
                            </div>
                            <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                                <box-icon name='dots-horizontal-rounded'></box-icon>
                            </div>
                        </div>
                    </div>
                    <ul className="p-2">
                        <li>
                            <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt
                        rounded-lg cursor-pointer
                        ">
                                <div className="relative">
                                    <img src="/images/avt-3.jpg" alt="friends" className="rounded-full" />
                                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0
                                    top-3/4 border-white border-2
                                    "></span>
                                </div>

                                <div>
                                    <span className="font-semibold">Vahid</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt
                        rounded-lg cursor-pointer
                        ">
                                <div className="relative">
                                    <img src="/images/avt-2.jpg" alt="friends" className="rounded-full" />
                                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0
                                    top-3/4 border-white border-2
                                    "></span>
                                </div>

                                <div>
                                    <span className="font-semibold">Amin</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt
                        rounded-lg cursor-pointer
                        ">
                                <div className="relative">
                                    <img src="/images/avt-5.jpg" alt="friends" className="rounded-full" />
                                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0
                                    top-3/4 border-white border-2
                                    "></span>
                                </div>

                                <div>
                                    <span className="font-semibold">Sara</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt
                        rounded-lg cursor-pointer
                        ">
                                <div className="relative">
                                    <img src="/images/avt-7.jpg" alt="friends" className="rounded-full" />
                                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0
                                    top-3/4 border-white border-2
                                    "></span>
                                </div>

                                <div>
                                    <span className="font-semibold">Shiba</span>
                                </div>
                            </div>
                        </li>
                    </ul>



                </div>

            </div>

        </div >
    );
}

export default Main;