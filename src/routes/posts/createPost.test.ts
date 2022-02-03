import axios from 'axios';

const endpoint = 'http://localhost:3000/posts/';

describe('create a post', ()=>{
    it('it should successfully create a new post', async ()=>{
        const testData = {
                authorId: "089ddda5-f4c8-4bca-974a-e69d616e504a",
                title: "my new post xxx",
                summary: "small summary for nonsense post",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;

        expect(responseData.authorId).toEqual(testData.authorId);
        expect(responseData.title).toEqual(testData.title);
        expect(responseData.content).toEqual(testData.content);
        expect(responseData.summary).toEqual(testData.summary);
        return;
    });
})