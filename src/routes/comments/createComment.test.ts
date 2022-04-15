import axios from 'axios';

const endpoint = 'http://localhost:3000/comments/';

describe('create a comment', ()=>{
    it('it should successfully create a new comment', async ()=>{
        const testData = {
            postId: "c44ed0d7-371a-4cac-b935-c82dee7743e0",
            title: "my Another new comment XyZxY",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
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
            postId: "nonExististentID",
            title: "my Another new comment XyZxY",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;
        // console.log(responseData);
        expect(responseData).toHaveProperty('message');
        expect(responseData?.message).toEqual('No such post found');
        return;
      });
    
})