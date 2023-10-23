const express= require('express');
const request=require('request-promise');
const app=express();
const PORT=process.env.PORT || 5000;
const apiKey='bae1dfb9cf76a132519e47b07c487a5d';
const baseurl=`http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welcome to scraper api');
});

//GET product details
app.get('/products/:productId', async (req,res)=>{
    const { productId}=req.params;
   // const { api_key}=req.params;
    try{
        const response = await request(`${baseurl}&url=https://www.amazon.in/dp/${productId}`);
        
        res.json(JSON.parse(response));
    }
    catch(error){
        res.json(error);
    }
});
//Get product reviews
app.get('/products/:productId/reviews', async (req,res)=>{
    const { productId}=req.params;
    //const { api_key}=req.params;
    try{
        const response = await request(`${baseurl}&url=https://www.amazon.in/product-reviews/${productId}`);
        
        res.json(JSON.parse(response));
    }
    catch(error){
        res.json(error);
    }
});
//Get product offers
app.get('/products/:productId/offers', async (req,res)=>{
    const { productId}=req.params;
    //const { api_key}=req.params;
    try{
        const response = await request(`${baseurl}&url=https://www.amazon.in/gp/offer-listing/${productId}`);
        
        res.json(JSON.parse(response));
    }
    catch(error){
        res.json(error);
    }
});
//Get search results
app.get('/search/:searchQuery', async (req,res)=>{
    const { searchQuery}=req.params;
   // const { api_key}=req.params;
    try{
        const response = await request(`${baseurl}&url=https://www.amazon.in/s?k=${searchQuery}`);
        
        res.json(JSON.parse(response));
    }
    catch(error){
        res.json(error);
    }
});
app.listen(PORT,()=>console.log(`server running on port ${PORT}.`)); 