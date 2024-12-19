import './App.css';

function App() {
	const productCatalog = [
		{
			id: 1,
			name: 'Fruits',
			products: [
				{
					id: 101,
					name: 'Apple',
					subProducts: [
						{ id: 1001, name: 'Red Delicious' },
						{ id: 1002, name: 'Granny Smith' },
						{ id: 1003, name: 'Honeycrisp' },
					],
				},
				{
					id: 102,
					name: 'Banana',
					subProducts: [
						{ id: 1004, name: 'Cavendish' },
						{ id: 1005, name: 'Red Banana' },
						{ id: 1006, name: 'Plantain' },
					],
				},
				{
					id: 103,
					name: 'Grapes',
					subProducts: [
						{ id: 1007, name: 'Green Grapes' },
						{ id: 1008, name: 'Red Grapes' },
						{ id: 1009, name: 'Black Grapes' },
					],
				},
			],
		},
		{
			id: 2,
			name: 'Vegetables',
			products: [
				{
					id: 201,
					name: 'Carrot',
					subProducts: [
						{ id: 2001, name: 'Orange Carrot' },
						{ id: 2002, name: 'Purple Carrot' },
						{ id: 2003, name: 'Yellow Carrot' },
					],
				},
				{
					id: 202,
					name: 'Tomato',
					subProducts: [
						{ id: 2004, name: 'Cherry Tomato' },
						{ id: 2005, name: 'Roma Tomato' },
						{ id: 2006, name: 'Beefsteak Tomato' },
					],
				},
				{
					id: 203,
					name: 'Potato',
					subProducts: [
						{ id: 2007, name: 'Russet Potato' },
						{ id: 2008, name: 'Sweet Potato' },
						{ id: 2009, name: 'Yukon Gold Potato' },
					],
				},
			],
		},
	];

	return (
		<>
			<div>
				<h1>Products</h1>
				{productCatalog.map((category) => (
					<div key={category.id}>
						<h2>{category.name}</h2>
						{category.products.map((product) => (
							<div key={product.id}>
								<h4>{product.name}</h4>
								<ul>
									{product.subProducts.map((subProduct) => (
										<li key={subProduct.id}>{subProduct.name}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}

export default App;
