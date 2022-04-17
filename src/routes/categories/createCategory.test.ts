import axios from 'axios';

const endpoint = 'http://localhost:3000/categories/';

describe('create a category', ()=>{
    it('it should successfully create a new category', async ()=>{
        const testData = {
            title: "my very new category",
            metaTitle: "my-very-new-category",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;

        expect(responseData.title).toEqual(testData.title);
        expect(responseData.metaTitle).toEqual(testData.metaTitle);
        expect(responseData.content).toEqual(testData.content);
        return;
    });

    it('Should return error for non existing ID', async () => {
        const testData = {
            postId: "nonExististentID",
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