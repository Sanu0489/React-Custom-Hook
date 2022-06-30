import React, { useEffect } from "react";

export default function useUpdateLoogger(value){

    useEffect(()=>{
        console.log(value);
    },[value])

}