import styled from 'styled-components';
import { useProducts } from '../context/ProductsContext';
import Button from './Button';

const StyledModal = styled.div`
	display: grid;
	gap: 2rem;
	background-color: hsl(20, 50%, 98%);
	border-radius: 0.8rem;
	padding: 1.5rem;
	max-width: 100%;
	width: 45%;
	padding-bottom: 3rem;
	height: fit-content;
	font-size: 100%;

	@media (max-width: 1024px) {
		width: 60%;
	}

	@media (max-width: 767px) {
		width: 95%;
		font-size: 50%;
	}
	@media (max-width: 480px) {
		font-size: 35%;
	}
`;
const Overlay = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: center;
	position: fixed;
	padding-top: 5rem;
	padding-bottom: 5rem;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100%;
	height: 100vh;

	background-color: rgb(0, 0, 0, 0.4);
	/* backdrop-filter: blur(1px); */
	z-index: 1000;
	transition: all 0.5s;
	overflow-y: auto;
`;

const Header = styled.h1`
	color: hsl(14, 65%, 9%);
`;

const Paragraph = styled.p`
	color: hsl(12, 20%, 44%);
`;

const List = styled.ul`
	max-width: 100%;
	width: 100%;
	border-radius: 0.8rem;
	background-color: hsl(13, 31%, 94%);
	font-size: 100%;
`;

const ListItem = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
`;

const ProductContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const ProductsDetails = styled.div`
	display: grid;
	gap: 1rem;
`;

const ProductName = styled.p`
	color: hsl(14, 65%, 9%);
	font-weight: 700;
`;

const ProductAmount = styled.span`
	color: hsl(14, 86%, 42%);
`;
const ProductPrice = styled.span`
	color: hsl(14, 25%, 72%);
	font-weight: 600;
	display: flex;
	gap: 1rem;
`;
const ProductTotalPrice = styled.span`
	color: hsl(14, 65%, 9%);
	font-weight: 700;
`;

const OrderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
`;

const Order = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 100%;
	width: 100%;
`;

const OrderTotal = styled.span`
	font-size: 0.8rem;
	font-weight: 600;
	color: hsl(12, 20%, 44%);
`;
const OrderTotalAmount = styled.span`
	font-size: 1.5rem;
	font-weight: 700;
	color: hsl(14, 65%, 9%);
`;

const ListImg = styled.img`
	border-radius: 5px;
	max-width: 100%;

	@media (max-width: 600px) {
		width: 20%;
	}
`;

function ConfirmModal({ orderTotal, cart }) {
	const { dispatch } = useProducts();

	function handleClick() {
		dispatch({ type: 'start/newOrder' });
		localStorage.clear();
	}
	return (
		<Overlay>
			<StyledModal>
				<svg
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z'
						fill='#1EA575'
					/>
					<path
						d='M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z'
						fill='#1EA575'
					/>
				</svg>

				<Header>Order Confirmed</Header>

				<Paragraph>We hope you enjoy your food!</Paragraph>
				<List>
					{cart.map(product => (
						<ListItem key={product.id}>
							<ProductContainer>
								<ListImg src={product.image.thumbnail} />

								<ProductsDetails>
									<div>
										<ProductName>{product.name}</ProductName>
									</div>

									<ProductPrice>
										<ProductAmount>{product.numPerProduct}x</ProductAmount>

										<span>@ ${Number(product.price).toFixed(2)}</span>
									</ProductPrice>
								</ProductsDetails>
							</ProductContainer>

							<ProductTotalPrice>
								${Number(product.productPriceTotal).toFixed(2)}
							</ProductTotalPrice>
						</ListItem>
					))}
				</List>

				<OrderContainer>
					<Order>
						<OrderTotal>Order Total</OrderTotal>
						<OrderTotalAmount>${orderTotal.toFixed(2)}</OrderTotalAmount>
					</Order>

					<Button size='large' variant='btnNewOrder' onClick={handleClick}>
						Start New Order
					</Button>
				</OrderContainer>
			</StyledModal>
		</Overlay>
	);
}

export default ConfirmModal;
