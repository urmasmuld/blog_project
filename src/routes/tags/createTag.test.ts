import axios from 'axios';
const endpoint = 'http://localhost:3000/tags/';

describe('create a tag', () => {
  it('it should create a new tag successfully', async () => {
    const testData = {
      title: 'Title createtag test',
      slug: 'Slug createtag test',
      content: 'Content createtag test'
    };

    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;

    // console.log(responseData.id);

    expect(responseData.title).toEqual(testData.title);
    expect(responseData.content).toEqual(testData.content);
    expect(responseData.slug).toEqual(testData.slug);

    return;
  });

  afterAll(async () => {
  });
});