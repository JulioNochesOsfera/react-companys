import React from "react";
import {useNavigate} from "react-router-dom"
import * as CompanyServer from "./CompanyServer"
const CompanyItem=({company, listCompanies})=>{
    const history = useNavigate();

    const handleDelete =async (companyId)=>{
        //companyId.preventDefault();
        await CompanyServer.deleteCompany(companyId)
        listCompanies()
    }
    return(
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-tittle">{company.name} <button className="ms-2 btn btn-sm btn-info" onClick={()=>history(`/update-company/${company.id}`)}>Update</button></h3>
                <p className="card-text">Fundacion: <strong>{company.foundation}</strong></p>
                <a href={company.website} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to website</a>
                <button onClick={()=>company.id && handleDelete(company.id)} className="btn btn-danger my-2">Delete</button>
            </div>
        </div>
    )
}
export default CompanyItem;