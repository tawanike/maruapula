import { GoogleSpreadsheet } from 'google-spreadsheet';


export default async (req, res) => {

  if (req.method === 'POST') {
    // Process a POST request
    console.log(req)
  } else {
    const banners = [];
      // Initialize the sheet - doc ID is the long id in the sheets URL
      const doc = new GoogleSpreadsheet('1Po4c-a568X82qyLoeatM3LL5_7-TUtyoKqCWUhFG4FA');

      await doc.useServiceAccountAuth({
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY,
        });
        
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[1];
        const rows = await sheet.getRows();
        
        rows.map(row => {
          if (row.publish === 'Yes') {
            banners.push({
              id: row.id,
              title: row.title,
              link: row.link,
              image: row.image,
              mobile_image: row.mobile_image,
              publish: row.publish,
              category: row.category,
            });
          }
        })
        return res.status(200).json(banners);
  }
    
  }
  