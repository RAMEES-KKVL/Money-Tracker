export interface SuccessResponse {
    success : boolean,
    token? : string,
}

export interface FailedResponsse {
    success : boolean
    message : string
}

// error : {success: false, message: 'Failed creating transaction'},
// headers : HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, lazyInit: ƒ},
// message : "Http failure response for http://localhost:7007/user/add_transaction?userId=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlYWJiNDBkMzhjMTk5MTc3M2I2NTU1IiwiaWF0IjoxNzI2NzM3MzI0LCJleHAiOjE3MjY5MTAxMjR9.IdZDHEU1_mZRshKHCOoKerbHHXnLrAecO3C_v0D8Ltw: 400 Bad Request",
// name : "HttpErrorResponse",
// ok : false
// status : 400
// statusText : "Bad Request"
// url : "http://localhos