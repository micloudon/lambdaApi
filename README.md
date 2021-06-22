# Lambda endpoints  

These lambda functions replace the car api I made previously   
https://github.com/micloudon/carApi  

They set up in AWS using AWS Lambda and AWS API Gateway  

**Get Car by Id**  
https://7a6pcnjgbj.execute-api.us-west-2.amazonaws.com/InitStage/id?carId=2000  

**Get Car by Make**  
https://b29afoesc2.execute-api.us-west-2.amazonaws.com/InitStage/make?carMake=ford  

**Get Car by Make and Model**  
https://453rqtejr5.execute-api.us-west-2.amazonaws.com/InitStage/makemodel?carMake=Ford&carModel=mustang  

**Get Car by Make and Model**  
https://lgepkgyk2e.execute-api.us-west-2.amazonaws.com/InitStage/makemodelyear/?carMake=ford&carModel=mustang&carYear=2016  

Feel free to play with these endpoints and even to use them in your own project  
Just don't do anything that will blow up my database  
  
In a production app you will in almost all cases want to make your api private and only accessible by your own front end app. The reason for this being that your data will not be private and anyone can see it, also other people can use your data for their own front end, adding stress to your servers and increasing your costs  
(This api is accessible by everyone)

