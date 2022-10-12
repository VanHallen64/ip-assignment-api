const TDAPI = require('tdapi');
exports.ipAssignmentController = function(req, serverRes) {
    console.log("Logging into TDx");
    
    // Authenticate
    const TD = new TDAPI({
        baseUrl: 'https://langara.teamdynamix.com/SBTDWebApi/api',
        credentials: {
            BEID: process.env.BEID,
            WebServicesKey: process.env.WebServicesKey
        }
    });
    console.log(TD);
    var IPObject = {};
    var IPsearchParams = {
        TypeIDs: [10044],
        NameLike: "10.1.0.1"
    };
    var AppID = 292;
    TD.getCIs(AppID, IPsearchParams)
        .then(CIs => {
            console.log(CIs[0].ID);
            TD.getCIRelationships(AppID, CIs[0].ID).then(relationships => {
                //console.log(relationships[0]);
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        })
}
