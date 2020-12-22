import React, { Suspense } from 'react';
import { Image, isCategory } from 'wordpress-r';
import { PostCategories } from './PostCategories';

export default function PostRailitem( { post }: { post: Post } ) {
	return (
		<div className="rounded w-full flex flex-col md:flex-row mb-10 hover:shadow-xl transition-all transform hover:scale-105">
			{ post.featured_media &&
				<a className="block md:hidden lg:block rounded-md h-64 w-32 flex-shrink-0 md:h-32 m-4 md:m-0" href={ post.link }>
					<Image id={ post.featured_media } size="thumbnail" className="rounded-md h-64 md:h-32 m-4 md:m-0" />
				</a>
			}
			<div className="bg-white rounded px-4">
				<Suspense fallback={ <span></span> }>
					<PostCategories post={ post } />
				</Suspense>
				<a href={ post.link } className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">{ post.title.rendered }</a>
			</div>
		</div>
	)
}
