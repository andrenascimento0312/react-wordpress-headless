import React, { useEffect, useState } from "react";

import RecentPosts from '../../components/RecentPosts/RecentPosts';
import AllPosts from '../../components/AllPosts/AllPosts';
import PageTitle from "../../components/PageTitle/PageTitle";

const Home = props => {

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const fetchPosts = async () => {
			try {
				const response = await fetch('https://andrednascimento.com.br/wp-json/blog/v1/all');
				if (!response.ok) {
					throw new Error('Deu ruim');
				}
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.error('Erro:', error);
			} finally {
				setLoading(false); // Marca o carregamento como concluído, independentemente do resultado
			}
		};

		fetchPosts();

	}, []);

	return (
		<>
			<PageTitle title="Meu projeto de blog" />

			{loading ? (
				<p>Carregando...</p>
			) : (
				<>
					<RecentPosts
						sectionTitle="Recent blog posts"
						data={posts}
					/>

					<AllPosts
						sectionTitle="All Posts"
						data={posts}
					/>
				</>

			)}


		</>
	)
}

export default Home;
