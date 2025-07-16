import { Route, Routes } from "react-router-dom";
import { AboutUs, ContactUs, Filter, Home, Login, OnSale, PageNotFound, ProductDetail, Register, Wedding, TermsCondition, PrivacyPolicy, ReturnPolicy, OrderPolicy, ShippingPolicy, Testimonial, Career, Profile, CancelOrder, OrderHistory, ChangePassword, Wishlist, Cart} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />

      <Route path="about-us" element={ <AboutUs /> } />
      <Route path="contact-us" element={ <ContactUs /> } />
      <Route path="on-sale" element={ <OnSale /> } />
      <Route path="wedding" element={ <Wedding /> } />
      <Route path="products" element={ <Filter /> } />
      <Route path="products/:id" element={ <ProductDetail /> } />
      <Route path="register" element={ <Register /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="terms-&-condition" element={ <TermsCondition /> } />
      <Route path="privacy-policy" element={ <PrivacyPolicy /> } />
      <Route path="return-policy" element={ <ReturnPolicy /> } />
      <Route path="order-policy" element={ <OrderPolicy /> } />
      <Route path="shipping-policy" element={ <ShippingPolicy /> } />
      <Route path="testimonial" element={ <Testimonial /> } />
      <Route path="career" element={ <Career /> } />

      <Route path="profile" element={ <Profile /> } />
      <Route path="change-password" element={ <ChangePassword /> } />
      <Route path="cancel-order" element={ <CancelOrder/> } />
      <Route path="order-history" element={ <OrderHistory/> } />
      <Route path="wishlist" element={ <Wishlist/> } />
      <Route path="cart" element={ <Cart/> } />









       

      <Route path="*" element={ <PageNotFound /> } />
    </Routes>
  )
}