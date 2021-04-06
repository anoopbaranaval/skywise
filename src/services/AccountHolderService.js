import axios from 'axios';

const ACCOUNTHOLDER_API_BASE_URL = "http://localhost:8080/api/v1/accountholders";

class AccountHolderService {

    getAccountholders(){
        return axios.get(ACCOUNTHOLDER_API_BASE_URL);
    }

    createAccountholders(accountholder){
        return axios.post(ACCOUNTHOLDER_API_BASE_URL, accountholder);
    }

    getAccountholderById(accountholderId){
        return axios.get(ACCOUNTHOLDER_API_BASE_URL + '/' + accountholderId);
    }

    updateAccountholder(accountholder, accountholderId){
        return axios.put(ACCOUNTHOLDER_API_BASE_URL + '/' + accountholderId, accountholder);
    }

    deleteAccountholder(accountholderId){
        return axios.delete(ACCOUNTHOLDER_API_BASE_URL + '/' + accountholderId);
    }
}

export default new AccountHolderService()