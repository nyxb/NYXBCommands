import type { Client } from 'discord.js'
import type NYXB from '../../typings'
import getAllFiles from './get-all-files'

class FeaturesHandler {
   constructor(instance: NYXB, featuresDir: string, client: Client) {
      this.readFiles(instance, featuresDir, client)
   }

   private async readFiles(instance: NYXB, featuresDir: string, client: Client) {
      const files = getAllFiles(featuresDir)

      for (const file of files) {
         let func = require(file.filePath)
         func = func.default || func

         if (func instanceof Function)
            await func(instance, client)
      }
   }
}

export default FeaturesHandler
