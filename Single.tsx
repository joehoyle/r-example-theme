import React, { FunctionComponent } from 'react';
import { Image, useData } from 'wordpress-r';
import { PostAuthor } from './components/PostAuthor';
import { PostCategories } from './components/PostCategories';

type Props = {
	post: Post,
}

export default function Single({ post }) {
	return <>
		<h2 className="text-gray-800 text-4xl font-bold mt-2 mb-8 leading-tight">{ post.title.rendered }</h2>

		{ post.featured_media &&
			<Image id={ post.featured_media } className="rounded shadow-lg" size="large" />
		}

		<PostCategories post={ post } />

		<div className="flex flex-col lg:flex-row lg:space-x-12">
			<div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
				<div className="" dangerouslySetInnerHTML={ { __html: post.content.rendered } }></div>
			</div>
			<PostAuthor post={ post } />
		</div>
	</>
}
