let sortData = (data) => {
    let returnData = {
        sent: [],
        preview: [],
        segments: data.segments,
        count: data.campaigns.length
    };
    data.campaigns.map((item) => {
        if (item.status === 'Sent') {
            returnData.sent.push(item)
        } else {
            returnData.preview.push(item)
        }
    })
    return returnData;
}

module.exports = {
    sortData: sortData
};