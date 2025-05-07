import { NextRequest } from "next/server";

const middleware = (request : NextRequest) => {
    console.log('request is ', request);
    const { headers } = request;
    if(headers.get('x-api-key') !== ""){
        return Response.json(null,{status:400, statusText:'Unauthorized request'});
    }
}

export default middleware;