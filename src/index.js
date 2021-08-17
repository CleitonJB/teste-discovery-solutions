const JSONServer = require("@discovery-solutions/json-server").default;

const servers = new JSONServer({
	project: "User Example",
	token: "6)e(0grtKiJm)hfYJ0CK)833rcmcHJqpfWrQtjb7p7)MZcPD9BLI92(GfjnG3TS(EzhXrV)H@xbB*MgH4@X6dhRIqCzq5(hMdfB*zGze1TE4v0FMvCODpVxjIBl2B3(AqQmcpAryYU8WLKZ22u$!UyXy0ZXpQMdVOojvrM@I9zRuG6T@4CmLnoHaZSIN$l*s58)nF77$c55MIn$VSZbnUXpxbG!P416oKOPqULmTGROHxsqUuNKuyhbk69D8kX(5",
	servers: {
	    rest: 4500,
	    socket: 5000,
	    file: 4750,
	},
	database: {
		url: "mongodb+srv://adm:ademir@cluster0.melvy.mongodb.net/Cluster0?retryWrites=true&w=majority",
		name: "Cluster0",
		type: "mongo"
	},
	entities: [{
        name: "user",
        fields: [{
            name: "name",
            type: "string",
        }, {
            name: "email",
            type: "string"
        }, {
            name: "birthdate",
            type: "date"
        }]
    }]
});