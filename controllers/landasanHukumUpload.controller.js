function upload(req,res){
    if (req.file.filename){
        res.status(200).json({
            message : 'File uploaded',
            url : req.file.filename

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