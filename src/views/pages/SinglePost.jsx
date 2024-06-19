import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";


const SinglePost = props => {
	const [post, setPost] = useState(null)
	const [loadingSlug, setLoadingSlug] = useState(true)

	const { slug } = useParams();

	useEffect(() => {
		const fetchPostBySlug = async () => {
			try {
				const response = await fetch(`https://andrednascimento.com.br/wp-json/blog/v1/post/${slug}`);

				if (!response.ok) {
					throw new Error('Erro ao carregar o post');
				}

				const data = await response.json();
				setPost(data);
			} catch (error) {
				console.error('Erro na requisição:', error);
			} finally {
				setLoadingSlug(false);
			}
		};

		fetchPostBySlug();

	}, [slug]); // slug para refetch quando slug mudar

	if (loadingSlug) {
		return <PageTitle title={`Carregando...`} />;
	}

	// post está vazio ou nulo
	if (!post) {
		return <PageTitle title={`Post não encontrado...`} />;
	}

	return (
		<>

			<PageTitle title={`${post.title}`} />

			<img src={post.featured_image} className="w-full max-h-[400px] object-cover my-8" alt="" srcset="" />

			<p className="text-white font-semibold my-8">{post.excerpt}</p>

			<p className="text-white post-content leading-7" dangerouslySetInnerHTML={{ __html: post.content }}></p>

		</>
	)
}

export default SinglePost;