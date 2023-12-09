import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});


/*

req.query = {
  url: [image_url],
  prod_cost: 
  margin:
  hours:
}

*/

export default async function myfunc(req, res) {
  const image_url = req.query?.url;
  const prod_cost = req.query?.prod_cost;
  const margin = req.query?.margin;
  const hours = req.query?.hours; 

  if (!image_url) {
    res.status(500).json({
      error: {
        message: 'No image provided',
      },
    });
  }

  if (!openai.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key not configured, please follow instructions in README.md',
      },
    });
    return;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "What’s in this image?" },
            {
              type: "image_url",
              image_url: {
                "url": image_url,
              },
            },
          ],
        },
      ],
    });
    console.log(response.choices[0]);

    const description = response.choices[0].message.content;


    // 'It took ' + inputValue + ' hours to make with an hourly rate of $15 and costed $' + inputValue + '. My profit margin is ' + selectedOption + '%. How much should I price this product at?'


    const answer = responses.choices[0].message.content;


    res.send(200).json
    ({
      answer,
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: { message: 'An error occurred' } });
  }
}
