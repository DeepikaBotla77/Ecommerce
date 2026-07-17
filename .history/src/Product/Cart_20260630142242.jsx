const addToCart = async () => {
  console.log("Product:", product);

  try {
    const res = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    console.log("Status:", res.status);

    const data = await res.json();
    console.log("Response:", data);

    if (res.ok) {
      alert("Product Added Successfully");
    }
  } catch (err) {
    console.log(err);
  }
};