var DHTSeries = require('rx-dht-sensor');

// 创建驱动实例
var dht11 = new DHTSeries({
    model: 'dht11',
    address: 4
});

// 简单的使用 fetch 方法读取传感器的值，如读取失败，err 参数不为 null
dht11.fetch(function(err, temperature, humidity) {
    if (err) {
        return console.error('a error occur when read dht-sensor:', err);
    }
    console.log('temperature: ' + temperature.toFixed(1) + ', humidity: ' + humidity.toFixed(1));
});