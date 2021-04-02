const log = require('npmlog')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const config = require('../config/config')

const PRE = 'File Controller'

const uploadPath = path.join(__dirname, '..', '..', 'upload')

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath)
}

const uploadFile = async (res, req) => {
  try {
    if (req.files.length > 0) {
      const filename = req.files[0].originalname
      log.info(PRE, `receiving file upload: ${filename}`)
      const extname = path.extname(filename)
      const uploadFilename = `${uuid.v4()}${extname}`
      const uploadFilePath = path.join(uploadPath, uploadFilename)
      fs.writeFileSync(uploadFilePath, fs.readFileSync(req.files[0].path))
      log.info(PRE, `saved to path ${uploadFilePath}`)
      res.json({
        result: 'success',
        url: `${config.AppUrl}/upload/${uploadFilename}`
      }) 
    } else {
      res.json({
        result: 'error',
        message: 'no file received'
      })
    }
  } catch(e) {
    res.json({
      result: 'error',
      message: e.message
    })
  }
}

module.exports = {
  uploadFile,
}