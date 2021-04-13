import { GoogleSpreadsheet } from 'google-spreadsheet';


export default async (req, res) => {

  if (req.method === 'POST') {
    // Process a POST request
    console.log(req)
  } else {
    const products = [];

      // Initialize the sheet - doc ID is the long id in the sheets URL
      const doc = new GoogleSpreadsheet('1Po4c-a568X82qyLoeatM3LL5_7-TUtyoKqCWUhFG4FA');

      await doc.useServiceAccountAuth({
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY,
        });
        
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();
        
        rows.map(row => {
          if(row.available === 'Yes'){
            products.push({
              id: row.id,
              title: row.title,
              size: row.size,
              description: row.description,
              available: row.available,
              price: row.price,
              promo_price: row.promo_price,
              category: row.category,
              specials: row.specials
            });
          }
        });
        res.status(200).json(products);    
  }
    
  }
  