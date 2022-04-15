import axios from 'axios';

const endpoint = 'http://localhost:3000/tags/';

describe('create tag', ()=>{
    it('it should successfully create a new tag', async ()=>{
        const testData = {
            id: "0ec6a00d-fcdd-4a71-8de2-d758db1898e3",
            title: "my new comment XyZxY",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        const response = await axios.post(endpoint, testData, {
            heaaders: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;

        expect(responseData.title).toEqual(testData.title);
        expect(responseData.content).toEqual(testData.content);
        return;
    });

    it('Should return error for non existing ID', async () => {
        const testData = {
            id: "nonExististentID",
                metaTitle: "my-new-category",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;
        // console.log(responseData);
        expect(responseData).toHaveProperty('error');
        expect(responseData?.error).toEqual('all fields must be filled');
        return;
      });
    
})