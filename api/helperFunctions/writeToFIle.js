const fs = require('fs');

let newCampaign = (data, newID) => {
    let reqData = data.body.data;

    if (reqData.sent === '' && reqData.clicked === '') {
        delete reqData.sent;
        delete reqData.clicked;
    } else {
            reqData.stats = {
                sent: reqData.sent,
                clicked: reqData.clicked
        }
        delete reqData.sent;
        delete reqData.clicked;
        reqData.id = newID;
        fs.readFile('./data/campaigns.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File reading Failed - ", err);
                return;
            }

            let newData = JSON.parse(jsonString);
            newData.campaigns.push(reqData);
        
            fs.writeFile("./data/campaigns.json", JSON.stringify(newData), (err) => {
                if (err) {console.log(err);}
            })
        })
    }
}

let editCampaign = (data) => {
    let reqData = data.body.data;
    console.log("reqData - ", reqData);

    if (reqData.sent === '' && reqData.clicked === '') {
        delete reqData.sent;
        delete reqData.clicked;
    } else {
            reqData.stats = {
                sent: reqData.sent,
                clicked: reqData.clicked
            }
    }
    delete reqData.sent;
    delete reqData.clicked;
    fs.readFile('./data/campaigns.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File reading Failed - ", err);
            return;
        }

        let newData = JSON.parse(jsonString);
        for(var i = 0; i < newData.campaigns.length; i++) {
            if (newData.campaigns[i].id === reqData.id) {
                console.log(newData.campaigns[i], ' old Data')
                newData.campaigns[i] = reqData;
            }
        };
        console.log("New data - ", newData)
        console.log("ReqData - ", reqData)

    
        fs.writeFile("./data/campaigns.json", JSON.stringify(newData, null, 2), (err) => {
            if (err) {console.log(err);}
        })
    })
}


module.exports = {
    newCampaign: newCampaign,
    editCampaign: editCampaign
}