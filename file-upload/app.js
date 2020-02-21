const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use('/uploads',express.static('uploads'));
app.use(cors({origin:"*"}));
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("The server strated onport 3000 !!!!");
})

const storage = multer.diskStorage({
    destination:(req,file,calBack) =>{
        calBack(null,'uploads');
    },
    filename:(req,file,calBack)=>{
        calBack(null,`FynOfHeuristic_${file.originalname}`)
    }
})

const upload = multer({storage:storage})

app.get("/", (req, res) => {
    res.send(
      `<h1 style='text-align: center'>
            Wellcome to FunOfHeuristic 
            <br><br>
            <b style="font-size: 182px;">😃👻</b>
        </h1>`
    );
  });

  app.post('/file',upload.single('profile'),(req,res,next)=>{
      const file =req.file;
      console.log(file.filename);
      if(!file){
          const error = new Error('No file')
          error.httpStatuseCode = 400
          return next(error)
      }
      //res.send(file);
      //const v = "F:\Bichi\Node\file-upload\";
    res.status(200).json({
        status:'success',
        filePath:file
    });
  })


  app.post('/multipleFile',upload.array('profile'),(req,res,next)=>{
    const file =req.files;
    console.log(file.filename);
    if(!file){
        const error = new Error('No file')
        error.httpStatuseCode = 400
        return next(error)
    }
    //res.send(file);
    //const v = "F:\Bichi\Node\file-upload\";
  res.status(200).json({
      status:'success',
      filePath:file
  });
})