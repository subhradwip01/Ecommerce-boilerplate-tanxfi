import { BASE_URL, END_POINTS } from "./api"

export const login = (userDetails) => {
    return new Promise(async (resolve,reject)=>{
        const res = await fetch(`${BASE_URL}${END_POINTS.users}`);
        const userData = await res.json();
        const emailIndex = userData.findIndex(user=>user.email===userDetails.email);
        if(emailIndex<0){
            reject("Wrong Email Address");
            return;
        }
        if(userData[emailIndex].password !== userDetails.password){
            reject("Wrong Password");
            return;
        }
        resolve(userData[emailIndex]);
    })
}

export const signup = (userDetails) => {
    return fetch(`${BASE_URL}${END_POINTS.users}`,{
        method:"POST",
        body:JSON.stringify(userDetails)
    })
}