const Hapi = require("hapi");
const server = new Hapi.Server();
server.connection({
    port: 3000,
    host: '0.0.0.0'
});
server.route({
    method: "GET",
    path: "/",
    handler: function (re, h) {
        return h("dalong");
    }

})
const demoplugin = function (server, option, next) {
    console.log("register demo plugin");
    server.route({
        method: "GET",
        path: "/demo",
        handler: function (re, h) {
            return h("this is from demo plugins");
        }
    })
    next();
};
demoplugin.attributes = {
    version: "v1.0",
    author: "dalong",
    name: "demoapp"
}
const promisedmeo = () => {
       server.register(demoplugin,function(error){
           if(error){
            console.log("registrer plugin is wrong");
           }
           server.start((err) => {
            if (err) {
                throw new Error("start server is wrong")

            }

        });
       })

}

promisedmeo();