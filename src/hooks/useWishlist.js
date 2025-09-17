import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import http from "../http";
import { toast } from "react-toastify";

export default function useWishlist() {
  const { token } = useAuth();
  const [wishlistIds, setWishlistIds] = useState([]);

  // Fetch wishlist items on login
  useEffect(() => {
    if (token) {
      http
        .get("/user/get-wishlist", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const ids = res.data.data.map((item) => item.product_id);
          setWishlistIds(ids);
        })
        .catch((err) => console.error("Failed to load wishlist", err));
    } else {
      setWishlistIds([]);
    }
  }, [token]);

  const addToWishlist = async (productId) => {
    if (!token) {
      toast.error("Please login to add to wishlist.");
      return;
    }
    try {
      const res = await http.post(
        "/user/user-add-wishlist",
        { product_id: productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setWishlistIds((prev) => [...prev, productId]);
      toast.success(res.data.message || "Product added to wishlist!");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to add to wishlist");
    }
  };

  const removeFromWishlist = async (productId) => {
    if (!token) {
      toast.error("Please login to remove from wishlist.");
      return;
    }
    try {
      const res = await http.post(
        "/user/user-remove-wishlist",
        { product_id: productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setWishlistIds((prev) => prev.filter((id) => id !== productId));
      toast.success(res.data.message || "Product removed from wishlist!");
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Failed to remove from wishlist"
      );
    }
  };

  return { wishlistIds, addToWishlist, removeFromWishlist };
}
