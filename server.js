import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json({limit:'10mb'}));
app.use(express.static(__dirname));

app.get('*',(req,res)=>{
 if(req.path.startsWith('/admin')) return res.sendFile(path.join(__dirname,'admin.html'));
 res.sendFile(path.join(__dirname,'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`NexusGamer ON http://localhost:${PORT}`));