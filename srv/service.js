const cds = require('@sap/cds');

module.exports = async srv => {

  // conexión al servicio externo
  const bpSrv = await cds.connect.to('BusinessPartnerA2X');

  // handler READ obligatorio
  srv.on('READ', 'A_BusinessPartner', async req => {
    console.log("readd......");
    
    return bpSrv.run(req.query);
  });

};
