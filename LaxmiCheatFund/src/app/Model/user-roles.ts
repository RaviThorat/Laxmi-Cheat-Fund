export class UserRoles {
    public static userRoles:Array<any>=[
        //  0 index
        {
            re:[
                {path:'view_enquiry' , lable:'View Enquiry'},
            ],

            oe:[
                {path:'cibil_req_enquiries', lable:'Cibil Required Enquiries'},
                {path:'verify_doc', lable:'Document Verifications'}
            ],

            ah:[
                {path:'view_loan_disbursed_customers', lable:'View Loan Disbursed Customers'},
                {path:'maintains_ledger', lable:'Maintain Ledger'}
                
            ],

            cm:[
                {path:'view_verified_customers', lable:'View Verified Customers'},
                {path:'prepares_sanction_letter', lable:'View Sanction Letter'},
                {path:'disburses_sanctioned-loan', lable:'Loan Disburse'},
                {path:'generate_loan_disburse', lable:'Generate Send Disburse PDF'}
            ],

            admin:[
                {path:'add_user', lable:'Add User'},
                {path:'view_users', lable:'View Users'},
                {path:'view_loan_disburse', lable:'View Loan Disbursement'},
            ],

            customer:[
                {path:'check_emi_history', lable:'Check EMI history'},
                {path:'pay_emi', lable:'Pay EMI'} // Pay EMI Pop Up
            ]


        }
    ]

}
