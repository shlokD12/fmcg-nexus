import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import WholesalePage from '@/components/pages/WholesalePage';
import RetailPage from '@/components/pages/RetailPage';
import ProductsPage from '@/components/pages/ProductsPage';
import ManufacturedProductsPage from '@/components/pages/ManufacturedProductsPage';
import StockistProductsPage from '@/components/pages/StockistProductsPage';
import CartPage from '@/components/pages/CartPage';
import DistributorEnquiryPage from '@/components/pages/DistributorEnquiryPage';
import PaymentsPage from '@/components/pages/PaymentsPage';
import ContactPage from '@/components/pages/ContactPage';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/components/pages/TermsOfServicePage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "wholesale",
        element: <WholesalePage />,
        routeMetadata: {
          pageIdentifier: 'wholesale',
        },
      },
      {
        path: "retail",
        element: <RetailPage />,
        routeMetadata: {
          pageIdentifier: 'retail',
        },
      },
      {
        path: "products",
        element: <ProductsPage />,
        routeMetadata: {
          pageIdentifier: 'products',
        },
      },
      {
        path: "products/manufactured",
        element: <ManufacturedProductsPage />,
        routeMetadata: {
          pageIdentifier: 'manufactured-products',
        },
      },
      {
        path: "products/stockist",
        element: <StockistProductsPage />,
        routeMetadata: {
          pageIdentifier: 'stockist-products',
        },
      },
      {
        path: "cart",
        element: <CartPage />,
        routeMetadata: {
          pageIdentifier: 'cart',
        },
      },
      {
        path: "distributor-enquiry",
        element: <DistributorEnquiryPage />,
        routeMetadata: {
          pageIdentifier: 'distributor-enquiry',
        },
      },
      {
        path: "payments",
        element: <PaymentsPage />,
        routeMetadata: {
          pageIdentifier: 'payments',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
        routeMetadata: {
          pageIdentifier: 'privacy-policy',
        },
      },
      {
        path: "terms-of-service",
        element: <TermsOfServicePage />,
        routeMetadata: {
          pageIdentifier: 'terms-of-service',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
