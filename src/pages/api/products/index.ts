import { GoogleSpreadsheet } from 'google-spreadsheet';


export default (req, res) => {
  const CLIENT_ID = 'maruapula@maruapula-1616429993848.iam.gserviceaccount.com';
  const CLIENT_SECRET = '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDmkeZIG+lHAyHv\nnjK7mzVtfz57LImn7HFjv25KzapBWjwcJx5ASKYYwEcoGkPPjapog2Dz9jI56OKi\nvDHz1yf4Y5G2wPX2VfkzEaMrXTYSY0v+46oMy/mAx2H5HI8kJUqB7Lqsl6Th3VVR\ndeApU6M5+IN9whrN77fYTmStU0E0FBR6D4s5wwVX6gSxoWfGqJG6ASKgVNZCyTkU\niyAAIotRrHq70URRwShWISiiFfZh6yUCkSLNbVVVIUv2MmpXdE6z61HdKJgmmy8I\nHrK7TCFmL3fcJ5HCX0pI2z8a2Uv+a4Log+IPvupCsxqZvSYgpQux5i3SqJ7aJqF9\nW3E7Ou9VAgMBAAECggEAA+RE3kULqsVXQ8udm0QIjVNp/bs9NuaLQr3plyf3Loje\n3dzH1RmaJW3NZam305+BAlLsBoIfy+bDOIWeVDl2n78n0k1ZzsbEYNkfMhgDKyFI\n7ZbweQHSXBrsFj/Qp1wHxhSgUVHH7dYGCXdzXqSI60K8uW6BdFC4/398kd5ctIvK\nrrto0vphCWjyJh45l0hjGDHUZCGcVH1S9VhalZd+C4viWlkE0S0g28Wws3I6rXnz\nC2qC52N7RtgxTaW6JkyzzaPZk0hEOoGVislE8K+Vxc2cWxBWV0VJ+2rYqi6RmgQN\nieNMp5ct3oDgR7brsn+sPjGHHDLVePNYgkeIOFSbkQKBgQD3m6d0MT7kXHttVulA\nqUDx803/5+9EoNHg67dVXKOni3MKLwpLCUyVK3kTEyEB9LW3444S7lOqncnEAi+8\npv6z5NeoOq4NVNAK0xm+JqZW13nZXejUc20oVFD2rMWK3KLYOaxYfLtwRQJHfIBy\n6OOqfjvLVxNtWumrfq2l6VixjQKBgQDuYmqByXtK4ZfPidgyLuIAdNRnMapjv3AV\n7m9KSOlkmDmKQxi1Hs+EzWrqcTv5n/CIToTvklSkqYB1vu3H80y7yRnwRHBlOec1\n3UYgray+ZQpc4YW7vZPrtt2AZBJWu1cjRYpOn6o7J3IUgr/w83mefApbmmobmYJI\nlhoGwIIu6QKBgDvo9IZfl/kHC3I0MjHMAgPIu9msU69GPiHuxqgnxw0153rSUOpA\n8L+zChN8cGMZw5Ifw/N+qM3Cadw8LzK1MTFzsF5q/EwLdl74HuVsUpj2f+wBFeG5\nn/K/G+vjd9SWd+xbYAD1BSEwAVIspKOpB9TrwCn+ApxV/+3Xs8pOAIDNAoGAE/oD\nWuT7hAbrpeSzTWFIZyljM1KiKMG+LthQUzVQ+bEYAVImG+d9FG/yabsbf4u7qHCM\nC1eD6Fib/0IEwyDMaWAs4Emb8Z+slIL6gXqMY1gsSiRMBLOaVcJ5RW0dbE8+uiH1\nuSkAJvzjPnzGgPamVnWmmI6UHcP7ewG5JJ+1SSECgYEAgSN0QK5g1rl14NlyTtaO\nA5Zl88cK4tpJLEpGBhMF9tk8pGpm4iOrFlvq6czRCjrXnZ01JurQHNAsfKHPuxSR\nxGkGOWBgqbF5+AbE2Rzowd6xSzRoMLtAhit/jMTPwcvE9EVnNoUYD/e4yGYBypVh\nWtJsjhAu+/+vnCTmmAvYcX4=\n-----END PRIVATE KEY-----\n';

  if (req.method === 'POST') {
    // Process a POST request
    console.log(req)
  } else {
    const products = [];
    (async () => {
      // Initialize the sheet - doc ID is the long id in the sheets URL
      const doc = new GoogleSpreadsheet('1kY3EDdWuA1je4YL-SzUNMhqZgVD8rfKMB5vuzQ2OoqA');

      await doc.useServiceAccountAuth({
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || CLIENT_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY || CLIENT_SECRET,
        });
        
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();
        
        rows.map(row => {
          products.push({
            id: row.id,
            title: row.title,
            size: row.size,
            description: row.description,
            available: row.available,
            image: row.image,
            price: row.price,
            promo_price: row.promo_price,
            category: row.category,
            specials: row.specials
          })
        })
        console.log(products);

        res.status(200).json(products);
    })();
    
  }
    
  }
  