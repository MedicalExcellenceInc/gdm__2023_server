const sequelize = require('./models').sequelize;
sequelize.sync();

const {
    gdm,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');


module.exports = {
    api : {
        getData : (query, callback) => {
            gdm.findAll({
                where :{
                    id_code: query.id_code,
                    hospital: {
                        [Op.like]: "%" + query.hospital + "%"
                    },
                    delete_yn: false
                },
                order: [
                    ['id', 'DESC']
                ]
            })
            .then( result => { callback(result) })
            .catch( err => { throw err })
        },
        getRecentDataOne : (query, callback) => {
            gdm.findAll({
                where :{
                    id_code: query.id_code,
                    hospital: {
                        [Op.like]: "%" + query.hospital + "%"
                    },
                    delete_yn: false
                },
                order: [
                    ['id', 'DESC']
                ],
                limit: 1
            })
            .then( result => { callback(result) })
            .catch( err => { throw err })
        },
        addData : (body, callback) => {
            gdm.create({
                date: body.date ,                                       
                hospital: body.hospital ,                               
                id_code: body.id_code ,                                 
                mother_age: body.mother_age ,                           
                crnt_gest_weeks_w: body.crnt_gest_weeks_w ,             
                crnt_gest_weeks_d: body.crnt_gest_weeks_d ,             

                edc: body.edc ,
                gest_cnt: body.gest_cnt ,
                birth_cnt: body.birth_cnt ,
                ftpn: body.ftpn , 
                pbmh: body.pbmh , 
                mc_cnt: body.mc_cnt , 
                natural_mc_cnt: body.natural_mc_cnt , 
                artificial_mc_cnt: body.artificial_mc_cnt , 
                
                twin_kind: body.twin_kind , 
                mother_original_weight: body.mother_original_weight , 
                mother_height: body.mother_height , 
                mother_original_bmi: body.mother_original_bmi , 
                sbp: body.sbp , 
                dbp: body.dbp , 
                hr: body.hr , 
                map: body.map , 
                smoking: body.smoking , 
                vpg_dur: body.vpg_dur , 
                
                survch: body.survch , 
                csec: body.csec , 
                prev_previa: body.prev_previa , 
                prev_gest_dm: body.prev_gest_dm , 
                prev_lga: body.prev_lga , 
                
                phx_cycle: body.phx_cycle , 
                igt: body.igt , 
                hylipidc: body.hylipidc , 
                enoth: body.enoth , 
                enoth_name: body.enoth_name , 
                adm_digest: body.adm_digest , 
                adm_digest_name: body.adm_digest_name , 
                adm_blood: body.adm_blood , 
                adm_blood_name: body.adm_blood_name , 
                immune: body.immune , 
                immune_dur: body.immune_dur , 
                immune_dur_name: body.immune_dur_name , 
                phx_skin: body.date , 
                phx_skin_name: body.phx_skin_name , 
                myomano: body.myomano , 
                pcos: body.pcos , 
                phx_ovarian: body.phx_ovarian , 
                
                fhx_dm: body.fhx_dm , 
                fhx_htm: body.fhx_htm , 
                
                hb: body.hb , 
                wbc: body.wbc , 
                hct: body.hct , 
                plt: body.plt , 
               
                gfr: body.gfr , 
                tc: body.tc , 
                hdl: body.hdl , 
                ast: body.ast , 
                alt: body.alt , 
                
                fasting_100: body.fasting_100 , 
                ogtt_50: body.ogtt_50 , 
                glucose: body.glucose , 
                hba1c: body.hba1c , 
                
                hcg: body.hcg , 
                pappa: body.pappa , 
                
                result: body.result ,                                   // 결과
                delete_yn: body.delete_yn ,                             // 삭제여부
            })
            .then( result => { callback(result) })
            .catch( err => {
                console.log(err);
                throw err; 
            })
        },
        deleteData : (body, callback) => {
            gdm.update({ delete_yn : true }, {
                where : { id : body.id }
            })
            .then( result => { callback(result) })
            .catch( err => { throw err })
        },
        // deleteData : callback => {
        //     gdm.destroy({
        //         where : { id : req.body.delete.id }
        //     })
        //     .then( result => { callback(result) })
        //     .catch( err => { throw err })
        // },
    }
}