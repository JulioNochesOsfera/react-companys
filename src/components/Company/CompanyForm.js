import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom"
import * as CompanyServer from "./CompanyServer"
const CompanyForm=()=>{
    const history = useNavigate();
    const params = useParams();
    const initialState ={id:0, name:"",foundation:1950,website:""}
    const [company,setCompany]=useState(initialState)
    const handleInputChange=(e)=>{
        //console.log(e.target.name)
        //console.log(e.target.value)
        setCompany({...company, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            let res;
            if(!params.id){
                res = await CompanyServer.registerCompany(company)
                const data = await res.json();
                if(data.message === 'ok'){
                    setCompany(initialState);
                }
            }else{
                res = await CompanyServer.updateCompany(params.id,company)
                const data = await res.json()
                if(data.message === 'edit ok'){
                    setCompany(initialState);
                }
            }

            history("/")


        }catch (error){
            console.log(error)
        }
    }
    const getCompany = async (companyId)=>{
        try{
            const res = await CompanyServer.getCompany(companyId);
            const data = await  res.json();
            const {name,foundation,website} = data.companies;
            console.log({name,foundation,website});
            setCompany({name, foundation, website})

        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(params.id){
            getCompany(params.id)
        }
        //eslint-disable-next-line
    },[])
    return(
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Company</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="name"  value={company.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fundacion</label>
                    <input type="number" name="foundation" value={company.foundation} onChange={handleInputChange} className="form-control" minLength="1900" maxLength="2050" autoFocus required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Website</label>
                    <input type="url" name="website" value={company.website} onChange={handleInputChange} className="form-control" maxLength="100" autoFocus required/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className={`btn btn-block btn-${params.id?"info":"success"}`}>{params.id?"Update":"Guardar"}</button>
                </div>
            </form>

        </div>
    )
}
export default CompanyForm