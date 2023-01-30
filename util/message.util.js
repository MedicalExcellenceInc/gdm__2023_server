import logger from '../configs/winston';

/**
 * 오류발생 시 그 상세 내용을 로그파일 및 콘솔에 남김
 * @param {*} location : 에러 위치
 * @param {*} error : exception error object
 * @param {*} desc : 추가하고 싶은 description
 */
export const logErrorMessage = (location, error, desc) => {
     logger.info("==================================");
     logger.error("[LOCATION] " + location);
     logger.error("[ERROR DESCRIPTION] " + desc + ' ###  ' + error);
     logger.info("==================================");
};

/**
 * router로 넘어오는 param확인
 * @param {*} req 
 */
export const logParamsInfoMessage = (req) => {
     logger.info("==================================");
     logger.info("[USER_ID] " + req.session.user_id);
     logger.info("[PARAMS]");
     logger.info(req.body);
     logger .info(req.query);
     logger.info("==================================");
};