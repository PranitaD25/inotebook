const mongoose=require('mongoose')

const mongoURI="mongodb://0.0.0.0:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo=async()=>{
    try
     {
        await mongoose.connect(mongoURI);
        console.log('Connected to Mongo Successfully!');
      } 
      catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
      }
}

module.exports=connectToMongo;