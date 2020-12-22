import React from 'react';
import { PostFeatured } from './components/PostFeatured';
import PostRailItem from './components/PostRailItem';

export default function Author( props: { posts: Post[], author: User } ) {
	let featuredPost = props.posts[0];
	let railposts = props.posts.slice( 1 );
	return (
		<>
			<div className="flex mb-8 pb-8 border-b">
				<img src={ props.author.avatar_urls['96'] }
					className="h-24 w-24 rounded-full mr-6 object-cover border shadow-xl" />
				<div>
					<h2 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">{ props.author.name }</h2>
					<p className="font-semibold text-gray-600 text-xs"> Editor </p>
				</div>
			</div>

			<div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mb-16">
				<PostFeatured post={ featuredPost } />
				<div className="w-full md:w-4/7">
					{ railposts.map( post => (
						<PostRailItem post={ post } key={ post.id } />
					) ) }
				</div>
			</div>
		</>
	)
}
