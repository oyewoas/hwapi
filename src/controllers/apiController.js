import env from '../../env'
import makeApiCall from '../utils'

/**
 * @class ApiController
 * @description Controllers for the API Calls
 * @exports ApiController
 */
export default class ApiController {
    /**
     * @method apiGetRequestController
     * @description Method for API get request
     * @param {object} req - The Request Object
     * @param {object} res - The Response Object
     * @returns {object} response body object
     */
    static async apiGetRequestController(req, res) {
        console.log(req.query)
      try {
        const { tag } = req.query
        const response = await makeApiCall(`${env.api_base_url}?tag=${tag}`) ;
        return res.json(response.data)
        
      } catch (error) {
        return error
      }
    }
}