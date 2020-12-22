import React, { FunctionComponent } from 'react';
import { get } from 'wordpress-r';

type Props = {
	post: Post,
}

export const PostAuthor: FunctionComponent<Props> = ({ post }) => {
	const author = get<User>( post._links.author[0].href );

	return <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
		<div className="p-4 border-t border-b md:border md:rounded">
			<div className="flex py-2">
				<img src={ author.avatar_urls['96'] }
					className="h-10 w-10 rounded-full mr-2 object-cover" />
				<div>
					<a href={ author.link } className="font-semibold text-gray-700 text-sm">{ author.name }</a>
					<p className="font-semibold text-gray-600 text-xs"> Editor </p>
				</div>
			</div>
			<p className="text-gray-700 py-3">
				{ author.description }
			</p>
		</div>
	</div>
}
