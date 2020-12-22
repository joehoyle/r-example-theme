import React from 'react';
import { PostFeatured } from './components/PostFeatured';
import PostRailItem from './components/PostRailItem';

export default function Category( props: { posts: Post[], category: Term } ) {
	let featuredPost = props.posts[0];
	let railposts = props.posts.slice( 1 );
	return (
		<>
			<h2 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">{ props.category.name }</h2>
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
