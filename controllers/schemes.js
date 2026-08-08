import pool from '../config/db.js'
import {getSchemes,filterByExtraCriteria} from  '../services/schemeService.js';
import {filterByExtraCriteriaForMba} from '../services/schemeServiceForMba.js'

export async function schemeForm(req,res) {
    let formData=req.body
    let {gender,
    state,
    category,
    qualification,
    family_income, ...userData}=formData;
    let  disability;
    if(formData.has_disability !== 'yes'){
        disability=0
    }else{
        disability=formData.disability_percentage
    }
    let filter={gender,
    state,
    category,
    qualification,
    family_income,disability};

    try{
        let schems= await getSchemes(filter);
        if(schems.length == 0){
            return res.status(202).json({
                flag:2,
                msg:"No schemes to display"
            })
        }

         let finalSchems;

        if( qualification === "btech"){
       finalSchems= filterByExtraCriteria(schems,userData)
        }
        if( qualification === "mba"){
       finalSchems=filterByExtraCriteriaForMba(schems,userData)
        }
        
        res.status(200).json({
            flag:1,
            schems:finalSchems
        })
    }catch(e){
        console.log(e);
        
        res.status(500).json({
            flag:-1,
            msg:"internal server error "
        })
    }
}