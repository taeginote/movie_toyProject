import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NotSearch from '../Error/NotSearch';
import { FlexBetweenCSS, FlexJustifyCSS } from '../Styles/common';
function SearchList({ data, isLoading, isError, error, title }) {
	const navigate = useNavigate();
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';
	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Div>
			{data.results.length == 0 ? (
				<NotSearch title={title} />
			) : (
				<>
					<S.List>
						{data.results.map(el => {
							return (
								<S.Box
									onClick={() => navigate(`/detail/${el.id}`)}
								>
									<S.ImgWrap>
										<S.Img
											src={IMG_BASE_URL + el.poster_path}
										/>
									</S.ImgWrap>
									<S.ContentWrapper>
										<S.Contents_Header>
											<S.Title>{el.title}</S.Title>
											<div>⭐️ {el.vote_average}</div>
										</S.Contents_Header>
										<S.Contents_Body>
											{el.overview.substr(0, 50) + '...'}
										</S.Contents_Body>
									</S.ContentWrapper>
								</S.Box>
							);
						})}
					</S.List>
					<S.UpBtn onClick={scrollUp}>UP!</S.UpBtn>
				</>
			)}
		</Div>
	);
}

export default SearchList;
const Div = styled.div`
	background-color: rgb(32, 33, 36);
`;

const List = styled.div`
	background-color: rgb(32, 33, 36);
	padding-top: 50px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const Box = styled.div`
	background-color: #111111;
	width: 300px;
	margin: 30px;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
		transition: transform 0.9s;
	}
	transform: scale(1);
	transition: transform 0.9s;
`;
const Img = styled.img`
	height: 320px;
	width: 300px;
`;
const Contents = styled.div`
	padding: 10px 0;
`;
const Contents_Header = styled.div`
	${FlexBetweenCSS}
	color: white;
	font-size: 20px;
`;
const Contents_Body = styled.div`
	padding-top: 20px;
	font-size: 18px;
	color: rgb(152, 152, 152);
`;

const ContentWrapper = styled.div`
	padding: 10px;
`;
const ImgWrap = styled.div`
	${FlexJustifyCSS}
`;
const UpBtn = styled.button`
	padding: 22px;
	border-radius: 50%;
	background-color: rgb(152, 152, 152);
	position: sticky;
	left: 92%;
	bottom: 100px;
	box-shadow: -5px -5px rgb(102, 102, 102) inset;
	border: none;
	:hover {
		background-color: rgb(102, 102, 102);
	}
`;
const Title = styled.div`
	max-width: 150px;
`;

const S = {
	List,
	Box,
	Img,
	Contents,
	Contents_Header,
	Contents_Body,
	ImgWrap,
	UpBtn,
	Title,
	ContentWrapper,
};
