import React from "react";
import { GetTop3 } from "../api/actions/GetTop3";
import Categories from "./Categories";

export default async function Page(){

    const options = await GetTop3();
    
    return(
        <Categories options={options}/>
    
    );
}



