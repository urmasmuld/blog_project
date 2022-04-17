import axios from 'axios';

const endpoint = 'http://localhost:3000/posts/';

describe('delete posts by ID', () => {
  let postId: string;

  beforeAll(async () => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
        const testData = {
                authorId: "089ddda5-f4c8-4bca-974a-e69d616e504a",
                title: "my very new post xxx",
                summary: "small summary for nonsense post",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;
        postId = responseData.id;
  });
  it('should delete posts by ID', async () => {

        const deleteData = {
          postId: postId
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
    // console.log(data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual(postId);
  });

  it('Should return error for non existing ID', async () => {
        const deleteData = {
          commentId: "nonExististentID"
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const data = response.data;
    // console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('No post with given id found');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
