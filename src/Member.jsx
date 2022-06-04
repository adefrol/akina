import React from "react";
import { useParams } from "react-router-dom";

export default function Member() {
    const {num} = useParams();
    console.log(num);
    return (
        <div>{num}</div>
    );
}