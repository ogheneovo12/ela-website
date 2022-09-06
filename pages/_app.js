import "styles/globals.css";
import "assets/css/owl.carousel.css";
import "assets/css/owl.theme.default.min.css";
import "assets/css/style.css";
import { BlogProvider } from "components/context/context";
import { ProductProvider } from "components/context/productcontext";


function MyApp({ Component, pageProps }) {
  return (
    <BlogProvider>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </BlogProvider>
  );
}

export default MyApp;
