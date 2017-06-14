'use strict'

class FileProcessor {

  createFieldSchema () {
    return {
      size: Number,
      name: String,
      type: {
        type: String
      },
      url: String
    }
  }

  process (attachment, storageProvider, model, doc, callback) {
    storageProvider.save(attachment, doc, (error, url) => {
      model.size = attachment.size
      model.name = attachment.name
      model.type = attachment.type
      model.url = url

      callback(error)
    })
  }

  willOverwrite (model) {
    return !!model.url
  }

  remove (storageProvider, model, doc, callback) {
    if (!model.url) {
      return callback()
    }

    storageProvider.remove(model, doc, callback)
  }
}

module.exports = FileProcessor
