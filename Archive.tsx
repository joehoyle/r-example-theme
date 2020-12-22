import React from 'react';
import { PostFeatured } from './components/PostFeatured';
import PostRailItem from './components/PostRailItem';

export default function Archive( props: { posts?: Post[] } ) {
	let featuredPost = props.posts[0];
	let railposts = props.posts.slice( 1 );
	return (
		<div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mb-16">
			<PostFeatured post={ featuredPost } />
			<div className="w-full md:w-4/7">
				{ railposts.map( post => (
					<PostRailItem post={ post } key={ post.id } />
				) ) }
			</div>
		</div>
	)
}
