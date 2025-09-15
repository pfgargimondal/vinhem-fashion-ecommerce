// src/hooks/useCart.js
import { useAuth } from "../context/AuthContext";
import http from "../http";
import { toast } from "react-toastify";

export default function useCart() {
  const { token } = useAuth();

  const addToCart = async (productId) => {
    if (!token) {
      toast.error("Please login to add items to your cart.");
      return;
    }

    try {
      const response = await http.post("/user/user-add-cart",
        { product_id: productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.message || "Product added to cart!");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to add product to cart"
      );
    }
  };

  return { addToCart };
}
