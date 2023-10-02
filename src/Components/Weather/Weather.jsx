import React from "react";
import { InputSearch } from "../InputSearch/InputSearch";

export const Weather = () => {
    return (
        <header className="masthead d-flex align-items-center">
            <div className="container px-4 px-lg-5 text-center">
                <h1 className="mb-1 text-dark-7">حالة الطقس</h1>
                <h3 className="mb-5 text-dark-7">أخر مستجدات وأخبار الطقس</h3>
                <InputSearch />
            </div>
        </header>
    );
};
