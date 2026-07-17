const addToCart = async () => {
  console.log(product); // Product object console lo vastunda?

  try {
    const res = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      alert("Product Added Successfully");
    } else {
      alert("Failed");
    }
  } catch (err) {
    console.log(err);
  }
};