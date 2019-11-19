var form = function (query, data) {
    query
        .waitForElementVisible('@hdrInput')
        .setValue('@hdrInput', data.hdr)
        .waitForElementVisible('@mkeInput')
        .setValue('@mkeInput', data.mke)
        .waitForElementVisible('@oriInput')
        .setValue('@oriInput', data.ori)
        .waitForElementVisible('@namInput')  
        .setValue('@namInput', data.nam)
        .waitForElementPresent(`[name="sexInput"] option[value="${data.sex}"]`)
        .click(`[name="sexInput"] option[value="${data.sex}"]`)
        .waitForElementPresent(`[name="racInput"] option[value="${data.rac}"]`)
        .click(`[name="racInput"] option[value="${data.rac}"]`)
        .waitForElementVisible('@hgtInput')
        .setValue('@hgtInput', data.hgt)
        .waitForElementVisible('@wgtInput')
        .setValue('@wgtInput', data.wgt)
        .waitForElementVisible('@haiInput')
        .setValue('@haiInput', data.hai)
        .waitForElementVisible('@offInput')
        .setValue('@offInput', data.off)
        .waitForElementVisible('@dowInput')
        .setValue('@dowInput', data.dow)
        .waitForElementVisible('@olnInput')
        .setValue('@olnInput', data.oln)
        .waitForElementVisible('@olsInput')
        .setValue('@olsInput', data.ols)
        .waitForElementVisible('@oldInput')
        .setValue('@oldInput', data.old)
}
var happy  = {}
module.exports = {
    beforeEach: browser => {
        happy = browser.page.wantedqueriespage()
        happy
            .navigate()
    },
    after: browser => {
        happy
            .end()
    },
    'Enter Wanted Test' : browser => {
        form(happy, {hdr: '9495738574', mke: 'BRF', ori: '475937587', nam: 'Nina Nubian', sex: 'F', rac: 'B', hgt: '504', wgt: '146', hai: 'Black', off: 'expired license', dow: '01/24/2015', oln: '758699', ols: 'LA', old: '04/14/2015' })
        happy
        .api.pause(1000)
    }
}