const fetch = require('node-fetch');

exports.ipAssignmentController = function(req, serverRes) {
    console.log("Logging into TDx");

    const TDAPI = require('tdapi');
 
    // Authenticate
    const TD = new TDAPI({
        baseUrl: 'https://langara.teamdynamix.com/SBTDWebApi/api',
        credentials: {
            BEID: '1CC3FF6F-33A6-4148-B145-F5581A4F32BD',
            WebServicesKey: 'A7DA41FD-189A-420C-841D-5BD13BAA4B41'
        }
    });
    var IPObject = {};
    var IPsearchParams = {
        TypeIDs: [10044],
        NameLike: "10.1.0.1"
    };
    var AppID = 292;
    TD.getCIs(AppID, IPsearchParams)
        .then(CIs => {
            console.log(CIs[0].ID);
            TD.getCIRelationships(AppID, CIs[0].ID).then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        })
    
}
