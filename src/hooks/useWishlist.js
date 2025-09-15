import { useAuth } from "../context/AuthContext";
import http from "../http";
import { toast } from "react-toastify";

export default function useWishlist() {
  const { token } = useAuth();

  const addToWishlist = async (productId) => {
    if (!token) {
      toast.error("Please login to add to wishlist.");
      return;
    }

    try {
      const response = await http.post("/user/add-to-wishlist",
        { product_id: productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.message || "Product added to wishlist!");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to add to wishlist"
      );
    }
  };

  return { addToWishlist };
}