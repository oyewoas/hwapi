import env from '../../env'
import {
  makeApiCall,
  messages,
  status,
  successResponse,
  errorResponse
} from '../utils'

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
    try {
      const {
        tag,
        sortBy,
        direction
      } = req.query
      const tagArray = tag.split(',');
      let posts;
      let allPosts = []
      tagArray.forEach(async (tag) => {
        try{
        const response = await makeApiCall(`${env.api_base_url}?tag=${tag}&sortBy=${sortBy}&direction=${direction}`);
        if (!response.data) return;
        posts = response.data.posts;
        posts.forEach(post => {
          allPosts.push(post); 
        })
        const uniquePostsArray = Array.from(new Set(allPosts));
        return successResponse(res, status.success, uniquePostsArray);
        } catch(error){
          return error
        }
      })
    } catch (error) {
      return errorResponse(res, status.error, messages.servererror)
    }
  }
}
