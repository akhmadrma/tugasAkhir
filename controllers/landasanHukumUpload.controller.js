function upload(req,res){
    if (req.file.filename){
        res.status(200).json({
            message : 'File uploaded',
            url : "http://localhost:3000/landasanHukum/"+ encodeURIComponent(req.file.filename)

        })
    }else{
        res.status(500).json({
            message : 'Something went wrong'
        })
    }
}

module.exports = {
    upload:upload
}