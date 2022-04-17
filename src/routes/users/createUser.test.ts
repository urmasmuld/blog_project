import axios from 'axios';

const endpoint = 'http://localhost:3000/users/';

describe('create user', ()=>{
    it('it should successfully create a new user', async ()=>{
        const testData = {
            firstName: "Juhan",
            lastName: "Tuha",
            mobile: "+3725225556",
            email: "tuha.juhan@email.ee"
        };

        const response = await axios.post(endpoint, testData, {
            heaaders: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;
        // console.log(responseData);
        expect(responseData.firstName).toEqual(testData.firstName);
        expect(responseData.email).toEqual(testData.email);
        return;
    });

    it('Should return error for incomplete input data', async () => {
        const testData = {
            email: "tuha.juhan@email.ee"
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;
        // console.log(responseData);
        expect(responseData).toHaveProperty('error');
        expect(responseData?.error).toEqual('Unable to create new user');
        return;
      });
    
})