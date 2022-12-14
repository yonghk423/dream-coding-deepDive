import React, { useEffect, useState } from "react";

interface ProductData {
  name: string;
  price: string;
  id: string;
}

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<ProductData[]>([]);
  console.log(products);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("π₯λ¨λν λ°μ΄ν°λ₯Ό λ€νΈμν¬μμ λ°μμ΄");
        setProducts(data);
      })
      .catch((error) => setError("μλ¬κ° λ°μνμμ΅λλ€."))
      .finally(() => setLoading(false));
    return () => {
      console.log("π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.");
    };
  }, [checked]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <input id='checkbox' type='checkbox' value={checked.toString()} onChange={handleChange} />
      <label htmlFor='checkbox'>Show Only π₯ Sale</label>
      <ul>
        {products?.map((product) => (
          <li key={product?.id}>
            <article>
              <h3>{product?.name}</h3>
              <p>{product?.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
