const getcartproducts = async (token) => {
  try {
    const res = await fetch(`https://swiftpick-backend.vercel.app/api/v1/cart/getCart`, {
      method: "GET",
      headers: {
        Authorization: token.token,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getcartproducts;
