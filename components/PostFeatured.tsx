import React, { FunctionComponent } from 'react';
import { Image } from 'wordpress-r';
import { PostCategories } from './PostCategories';

type Props = {
	post: Post,
}

export const PostFeatured: FunctionComponent<Props> = ({ post }) => {

	return <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
		<a href={ post.link }>
			{ post.featured_media &&
				<Image id={ post.featured_media } size="large" className="rounded-md object-cover w-full h-64" />
			}
		</a>
		<PostCategories post={ post } />
		<a href={ post.link } className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
			<h2>{ post.title.rendered }</h2>
		</a>
		<div className="text-gray-600 mb-4" dangerouslySetInnerHTML={ { __html: post.excerpt.rendered }}></div>
		<a
			href={ post.link }
			className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100  hover:shadow-xl transition-all transform hover:scale-105"
		>
			Read more
		</a>
	</div>
}
