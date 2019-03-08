'use strict'

import 'firebase/storage'

/**
 * Storage module
 */
export default app => {
  app.storage().ref('path')
}
