import React from 'react';
import {Route,Routes} from "react-router-dom";
import CompanyForm from "../components/Company/CompanyForm";
import CompanyList from "../components/Company/CompanyList";
export const RouteNavigator = () =>{
    return(
        <Routes>
            <Route path="/" element={<CompanyList />} />
            <Route path="/company-form" element={<CompanyForm/>} />
            <Route path="/update-company/:id" element={<CompanyForm/>} />
        </Routes>
    )
}