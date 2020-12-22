import React, { FunctionComponent } from 'react';
import { get } from 'wordpress-r';

type Props = {
	post: Post,
}

export const PostCategories: FunctionComponent<Props> = ({ post }) => {
	const links = post._links['wp:term'].filter( t => t.taxonomy === 'category' );
	if ( links.length === 0 ) {
		return <></>
	}

	const categories = get<Category[]>( links[0].href );

	return <div className="block  mt-4">
		{ categories.map( category => (
			<a key={ category.id } href={ category.link } className="text-green-700 text-sm mr-2">{ category.name }</a>
		) ) }
	</div>
}
