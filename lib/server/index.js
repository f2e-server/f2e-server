const tcpPortUsed = require('tcp-port-used')
const createServer = require('./createServer')
const PORT = require('../util/PORT')
const setConf = require('../conf/set')
const IP = require('../util/IP')
const HOSTS = require('../util/HOSTS')
const root = process.cwd()
const conf = require('../conf/conf')()
const os = require('os')

const explorer = (port = 80, host = IP) => {
    if (process.argv.includes('start')) {
        const protocal = port === 443 ? 'https://' : 'http://'
        setTimeout(function () {
            console.log('server start: ' + protocal + host + ':' + port)
            require('child_process').exec((os.type().match(/Windows/) ? 'explorer ' : 'open ') + protocal + host + ':' + port)
        }, 2000)
    }
}
module.exports = ({
    port = conf.port,
    host = conf.host
}) => {
    if (host) {
        port = port || 80
        HOSTS(host)
    }
    if (port) {
        port = port | 0
    }

    if (port) {
        setConf({port, host, root})
        tcpPortUsed
            .check(port, IP)
            .then(inUse => {
                inUse || conf.onServerCreate(createServer(port))
                explorer(port, host)
            }).catch(err => console.error(err))
    } else {
        PORT().then(port => {
            setConf({port, host, root})
            conf.onServerCreate(createServer(port))
            explorer(port, host)
        }).catch(err => console.error(err))
    }
}
