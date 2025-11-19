import client from "prom-client";

const activeUserGuage = new client.Gauge({
      name : "request_count",
      help : "Total request count",
      labelNames : ["method", "route"]
});

//@ts-ignore
export function requestCount(req , res, next){

    activeUserGuage.inc({
           method: req.method,
           route: req.path
    });

     res.on("finish", ()=> {
        activeUserGuage.dec({
            method : req.method ,
            route: req.path 
        });
     });

    next();
}