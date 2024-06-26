
import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationType = async({params : {type}} : SearchParamProps) => {

    const {userId} = auth();

    const transformation = transformationTypes[type];

    if(!userId) redirect('/sign-in')

    
    return (
        <>
            <Header title={transformation.title} subtitle={transformation.subTitle}/>

            <section className="mt-10">
                <TransformationForm 
                action="Add" 
                userId={userId} 
                type={transformation.type as TransformationTypeKey}
                creditBalance={2000}/>
            </section>
        </>
    )
}   

export default AddTransformationType