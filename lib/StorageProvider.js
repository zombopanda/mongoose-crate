'use strict'

class StorageProvider {

  save (path, doc, callback) {
    throw new Error('StorageProvider#save not implemented')
  }

  remove (attachment, doc, callback) {
    throw new Error('StorageProvider#remove not implemented')
  }
}

module.exports = StorageProvider
