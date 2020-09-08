import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Loading from "../components/Loading";

const Index = (props) => {
    const router = useRouter();
    useEffect( () => {
        router.push("/latest/EUR");
    }, [])

    return <Loading />
}
export default Index;
