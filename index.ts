const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
    user: "avnadmin",
    password: "AVNS_Us9NyjR-luSgZcjPQ4Q",
    host: "pg-e877ea8-linit.a.aivencloud.com",
    port: 20716,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUHCL0EbeumuHyEbg1B/uoCFN6Em0wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvZjc0NDUwYTgtM2MyNi00OTY0LTlhYzEtYzY1NDVhYzQw
MTlmIFByb2plY3QgQ0EwHhcNMjQwNDA4MjMwODU0WhcNMzQwNDA2MjMwODU0WjA6
MTgwNgYDVQQDDC9mNzQ0NTBhOC0zYzI2LTQ5NjQtOWFjMS1jNjU0NWFjNDAxOWYg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALbGOfWg
C2v8NqgRVWCLc6dARwJfuLmC0sTEvWJYd7ygxTfgvIE5PPm3YASJmcp6GyimU4Vr
JiyhSzgdOjd+VDm8W6o07ArbH1W8PhDevpkC+o9qHpCpM5duaumCj2NRUnCLIeeQ
MY23xjp5vMlCRNleec3k7lfO9vXj2MB17NM6aek2jaMjT930FHeJa7oxwY3Tam+a
Kn94bcT32aVY7l4pjRcmiTMPUI9Sq1N4ybh0XpbtTebBHvfo/A/niLAUzxtgS5ot
0sXJ+3h0eu9rLO6STAN6SDnKLZGQSYL7zW8PgTgj/RrkXfaMsNSuhAqDKCDKsKIR
cLHSMizY5ZateQUiGGpEz4QeBFhKWV8yXu2OJCPZjLokwIBswBWZ8nD8XTezaf2i
8hYVLaS20u2I+1sOjZBngykXhEkGObD2t54O2ns/7s/TQN5/zGGcXuQO1gRSHebY
nvvvXY0IpA0Txhsjo5ljVDQiWzZ6QCCS8Xp7ycf/hU7wFRn6WcbZ8sraswIDAQAB
oz8wPTAdBgNVHQ4EFgQULHqDsADLLgAc9mjmheigLKaJPr4wDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAAJ62JFzuS9ckrCV
z2JBVGwbm3PquC7yG3dP1v7QIdNFo7GyiKAgfTRu68vUaAkP9xWb2pluZloRxchS
74pykYlYnb+o2RXfRxtjohc0U3FEqMetx0sh3rpaWIbHpECV+BUTdXaVstbZeWqE
+bdCkwp2Pv/X0OssQ5R1tLlWEkR3rMSJWlr1HAsQXHOqx+dDuI5oM8rMMe20EBCw
EVlnd5d+uQK71XkIpqUW8pV/sTiKtw03eb3RLUnvmOR+XY922g8zgh8dJejebEoC
k9f1a7wWLYTKbvuDS92CtIUaFyeX6Uku6lvZw3IMaEuJ+i6dNeFN/Ius9iwUKI42
B2HTklKeb61zNMyghA2iuinJQ861ws6+vOxSVBkQbk3UASVPkhCJiWyxMKcMzMrj
5RZcNb2triMIMXEZGR2dFNulWbZCYsPBUl1uB5b5Wp2AOixPnykwsXNQL1Z0jwCY
JAWNNp20t3q3vbqz6P3CTEcuFWyml1tdWBYrltpwKy3OAXc/Cw==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});
