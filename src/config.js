module.exports = config = {
    // 这是winston 默认的 level
    levels: {
        silly: 0,
        debug: 1,
        verbose: 2,
        info: 3,
        warn: 4,
        error: 5
    },

    default_level: 1
}

// 因为window , mocha test 过不了
// window.config = window.config || {};
// // window.config = config.levels
// // window.default_level = config.default_level

// for(var k in config){
//     if(config.hasOwnProperty(k)){
//         window.config[k] = config[k]
//     }
// }