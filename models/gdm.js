
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'gdm_predict',
        {
            date: { type: DataTypes.STRING },
            hospital: { type: DataTypes.STRING },
            id_code: { type: DataTypes.STRING },
            mother_age: { type: DataTypes.STRING },
            crnt_gest_weeks_w: { type: DataTypes.STRING },
            crnt_gest_weeks_d: { type: DataTypes.STRING },

            edc: { type: DataTypes.STRING },
            gest_cnt: { type: DataTypes.STRING },
            birth_cnt: { type: DataTypes.STRING },
            ftpn: { type: DataTypes.STRING },
            pbmh: { type: DataTypes.STRING },
            mc_cnt: { type: DataTypes.STRING },
            natural_mc_cnt: { type: DataTypes.STRING },
            artificial_mc_cnt: { type: DataTypes.STRING },
            
            twin_kind: { type: DataTypes.STRING },
            mother_original_weight: { type: DataTypes.STRING },
            mother_height: { type: DataTypes.STRING },
            mother_original_bmi: { type: DataTypes.STRING },
            sbp: { type: DataTypes.STRING },
            dbp: { type: DataTypes.STRING },
            hr: { type: DataTypes.STRING },
            map: { type: DataTypes.STRING },
            smoking: { type: DataTypes.STRING },
            vpg_dur: { type: DataTypes.STRING }, 
            
            survch: { type: DataTypes.STRING },
            csec: { type: DataTypes.STRING },
            prev_previa: { type: DataTypes.STRING }, 
            prev_gest_dm: { type: DataTypes.STRING },
            prev_lga: { type: DataTypes.STRING },
            
            phx_cycle: { type: DataTypes.STRING },
            igt: { type: DataTypes.STRING },
            hylipidc: { type: DataTypes.STRING },
            enoth: { type: DataTypes.STRING }, 
            enoth_name: { type: DataTypes.STRING }, 
            adm_digest: { type: DataTypes.STRING },
            adm_digest_name: { type: DataTypes.STRING },
            adm_blood: { type: DataTypes.STRING },
            adm_blood_name: { type: DataTypes.STRING },
            immune: { type: DataTypes.STRING },
            immune_dur: { type: DataTypes.STRING }, 
            immune_dur_name: { type: DataTypes.STRING }, 
            phx_skin: { type: DataTypes.STRING },
            phx_skin_name: { type: DataTypes.STRING }, 
            myomano: { type: DataTypes.STRING },
            pcos: { type: DataTypes.STRING },
            phx_ovarian: { type: DataTypes.STRING },
            
            fhx_dm: { type: DataTypes.STRING },
            fhx_htm: { type: DataTypes.STRING },
            
            hb: { type: DataTypes.STRING },
            wbc: { type: DataTypes.STRING },
            hct: { type: DataTypes.STRING },
            plt: { type: DataTypes.STRING }, 
            
            gfr: { type: DataTypes.STRING },
            tc: { type: DataTypes.STRING },
            hdl : {type : DataTypes.STRING },
            ast: { type: DataTypes.STRING },
            alt: { type: DataTypes.STRING },
            
            fasting_100: { type: DataTypes.STRING },
            ogtt_50: { type: DataTypes.STRING } ,
            glucose: { type: DataTypes.STRING },
            hba1c: { type: DataTypes.STRING },
            
            hcg: { type: DataTypes.STRING },
            pappa: { type: DataTypes.STRING } ,
            
            result: { type: DataTypes.STRING },
            delete_yn: { type: DataTypes.STRING },
            ai_model_version: { type: DataTypes.STRING } 
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    )
};