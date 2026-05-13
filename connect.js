const oracledb = require('oracledb');

//1. Thick 모드 활성화 (반드시 최상단에서 실행)
try {
    oracledb.initOracleClient({ libDir:'C:\\data\\oracle\\instantclient_19_30' });
}catch(err){
    console.log('오라클 클라이언트 초기화 실패!', err);
    process.exit(1);
}

async function getConnection(){
    let connection;
    try{
        connection = await oracledb.getConnection({
            user:'user06',
            password:'pass',
            connectionString:'localhost/xe'
        });
        console.log('oracle DB 연결성공');
        return connection;
    }catch(err){
        console.log('oracle DB 연결 오류:', err);
    }
}  

module.exports = {getConnection};