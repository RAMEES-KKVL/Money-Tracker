export interface SuccessResponse {
    success : boolean,
    token? : string,
    data? : Array<Transaction>  
    emptyData? : boolean
}

export interface FailedResponsse {
    success : boolean
    message : string
    tokenExpired? : boolean
}

export interface Transaction {
    _id: any 
    transactionType: string;
    transactionCategory: string;
    transactionAmount: number;
    transactionDescription: string;
    transactionDate: Date;
}