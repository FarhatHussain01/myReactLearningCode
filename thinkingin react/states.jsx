import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState(''); // State for the search filter text
  const [inStockOnly, setInStockOnly] = useState(false); // State for the in-stock filter
  // if the product is avaiable only that products is shown

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText} // Pass the state setter functions to the SearchBar component
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name : (
    <span style={{ color: 'red' }}>
      {product.name}
    </span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 // Apply the search filter
    //   -1 means item is not present
    ) {
      return; // Skip this product if it doesn't match the filter
    }
    if (inStockOnly && !product.stocked) {
      return; // Skip this product if it's not in stock and in-stock filter is enabled
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly, setFilterText, setInStockOnly }) {
  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value); // Update the filter text state based on input value
  };

  const handleInStockChange = (event) => {
    setInStockOnly(event.target.checked); // Update the in-stock filter state based on checkbox value
  };

  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={handleFilterTextChange} // Call the handler function when the input value changes
        placeholder="Search..."
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange} // Call the handler function when the checkbox value changes
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
