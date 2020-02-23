export default {
  Query: {
    career: async (parent, args, {
      Collection
    }) => {
      let response = {}
      try {

        let criteria = {};
        if (args._id) {
          criteria._id = args._id;
        }
        response.career = await Collection['career'].find(criteria);
        return response;

      } catch (e) {

        let errorDetails = {
          error: e.toString(),
          code: 501
        }
        response.error = errorDetails;
        return response;
      }
    },
    comparePlayers: async (parent, args, {
      Collection
    }) => {

      let response = {}
      try {
        let criteria = {};
        if (args.users && args.users.length && args.users.length > 1) {

          criteria['_id'] = {
            '$in': args.users
          }

        } else {

          let errorDetails = {
            error: "please select atleast two player to compare.",
            code: 501
          }
          response.error = errorDetails;
          return response;

        }

        response.career = await Collection['career'].find(criteria);
        return response;

      } catch (e) {

        let errorDetails = {
          error: e.toString(),
          code: 501
        }

        response.error = errorDetails;
        return response;

      }
    }
  },
  Mutation: {

    // also need to setup error block 
    createCareer: async (parent, args, {
      Collection
    }) => {

      try {

        return await new Collection['career'](args).save();

      } catch (e) {

        console.error("something went Wrong!")

      }

    }

  },
};