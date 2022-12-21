const API_URL="http://192.168.1.75:8000/api/companies/";

export const listCompanies =async() =>{
    return  await fetch(API_URL);

}

export  const getCompany = async(companyId)=>{
    return await fetch(`${API_URL}${companyId}`)
}

export const registerCompany = async (newCompany) =>{
    return await fetch(API_URL, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "name":String(newCompany.name).trim(),
            "foundation":parseInt(newCompany.foundation),
            "website":String(newCompany.website).trim(),
        })
    })
}

export const deleteCompany = async (id_company)=>{
    return await fetch(`${API_URL}${id_company}`,{
        method:'DELETE'
    })
}
export const updateCompany = async (id_company,dataCompany)=>{
    return await fetch(`${API_URL}${id_company}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "name":String(dataCompany.name).trim(),
            "foundation":parseInt(dataCompany.foundation),
            "website":String(dataCompany.website).trim(),
        })
    })
}

