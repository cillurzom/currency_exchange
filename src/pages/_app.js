import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import Layout from "../components/Layout";
import "../style.css";
import "react-datepicker/dist/react-datepicker.css";
function MyApp({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp;