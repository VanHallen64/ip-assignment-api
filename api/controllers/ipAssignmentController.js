const TDAPI = require('tdapi');
exports.ipAssignmentController = function(req, serverRes) {
    return req;
    
    // Authenticate
    const TD = new TDAPI({
        baseUrl: 'https://langara.teamdynamix.com/SBTDWebApi/api',
        credentials: {
            BEID: process.env.BEID,
            WebServicesKey: process.env.WebServicesKey
        }
    });

    var IPObject = {};
    var IPsearchParams = {
        TypeIDs: [10044],
        NameLike: "10.1.0.1"
    };

    TD.getCIs(process.env.APP_ID, IPsearchParams)
        .then(CIs => {
            console.log(CIs[0].ID);
            TD.getCIRelationships(AppID, CIs[0].ID).then(relationships => {
                if(relationships.length > 0) {
                    reject("This IP is assigned");
                }
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        })
}
